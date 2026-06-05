import "dotenv/config";
import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import multer from 'multer';

// Setup multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints
  app.post("/api/analyze-question", upload.single('image'), async (req: Request, res: Response) => {
      try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      const { text, type, textContent, sourceCredit, imageUrl } = req.body;

      if (!req.file && !imageUrl && !textContent) {
         return res.status(400).json({ error: "Vui lòng cung cấp hình ảnh, URL hoặc nội dung văn bản." });
      }

      const ai = new GoogleGenAI({ apiKey });

      const contents: any[] = [];
      
      // Smart JSON detection and extraction
      let processedTextContent = textContent;
      if (textContent) {
        try {
          const trimmed = textContent.trim();
          // Check if it looks like a JSON object or array
          if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
            const parsed = JSON.parse(trimmed);
            if (parsed && typeof parsed === 'object') {
              let extracted = `[Hệ thống tự động phát hiện và trích xuất dữ liệu từ chuỗi cấu trúc JSON dán vào]\n`;
              
              if (Array.isArray(parsed)) {
                extracted += `Có tổng cộng ${parsed.length} câu hỏi hoặc mục tin trong mảng JSON.\n`;
                parsed.forEach((item, index) => {
                  extracted += `--- Mục #${index + 1} ---\n`;
                  extracted += typeof item === 'object' ? JSON.stringify(item, null, 2) : item;
                  extracted += `\n`;
                });
              } else {
                // Extract question text / context / stem
                const questionText = parsed.question || parsed.stem || parsed.text || parsed.prompt || parsed.content || parsed.body || parsed.passage || '';
                if (questionText) {
                  extracted += `• Nội dung câu hỏi (Question / Stem): ${typeof questionText === 'object' ? JSON.stringify(questionText, null, 2) : questionText}\n`;
                }
                
                // Extract choices / options
                const choices = parsed.choices || parsed.options || parsed.answers || parsed.choicesList || '';
                if (choices) {
                  extracted += `• Các đáp án lựa chọn (Choices / Options): ${typeof choices === 'object' ? JSON.stringify(choices, null, 2) : choices}\n`;
                }
                
                // Extract pre-indicated correct answer
                const corrAns = parsed.correctAnswer || parsed.correct_answer || parsed.answer || parsed.correct || parsed.key || '';
                if (corrAns) {
                  extracted += `• Đáp án đáp số sẵn có (Answer / Key): ${typeof corrAns === 'object' ? JSON.stringify(corrAns, null, 2) : corrAns}\n`;
                }
                
                // Extract explanation
                const expl = parsed.explanation || parsed.explanationText || parsed.rationale || parsed.explanations || '';
                if (expl) {
                  extracted += `• Giải thích hiện hữu (Explanation / Rationale): ${typeof expl === 'object' ? JSON.stringify(expl, null, 2) : expl}\n`;
                }

                // Add any other attributes
                const otherKeys = Object.keys(parsed).filter(k => !['question', 'stem', 'text', 'prompt', 'content', 'body', 'passage', 'choices', 'options', 'answers', 'choicesList', 'correctAnswer', 'correct_answer', 'answer', 'correct', 'key', 'explanation', 'explanationText', 'rationale', 'explanations'].includes(k));
                if (otherKeys.length > 0) {
                  extracted += `• Các trường dữ liệu bổ sung:\n`;
                  for (const key of otherKeys) {
                    extracted += `  - ${key}: ${typeof parsed[key] === 'object' ? JSON.stringify(parsed[key], null, 2) : parsed[key]}\n`;
                  }
                }
              }
              processedTextContent = extracted;
            }
          }
        } catch (e) {
          // If JSON.parse fails, do nothing, keep raw textContent
        }
      }

      const prompt = `Bạn là một chuyên gia luyện thi Digital SAT. ${
        imageUrl ? 'Người dùng đã cung cấp đường dẫn ảnh câu hỏi.' : (req.file ? 'Người dùng đã đính kèm ảnh câu hỏi.' : 'Người dùng đã cung cấp nội dung câu hỏi dán trực tiếp.')
      } 
      Loại câu hỏi: ${type || 'tổng hợp'}.
      ${sourceCredit ? `Nguồn câu hỏi: ${sourceCredit}` : ''}
      ${processedTextContent ? `Nội dung/Câu hỏi cần giải:\n"${processedTextContent}"\n\n` : ''}
      ${text ? `Yêu cầu thêm từ người dùng: "${text}"\n\n` : ''}
      
      Hãy giải thích chi tiết câu hỏi và các bước giải bằng tiếng Việt, kèm các thuật ngữ chuyên ngành tiếng Anh (ví dụ: Linear equation, inference).
      Hãy chỉ ra vì sao đáp án đúng là đúng, và các đáp án sai lại sai. Có một quy tắc bắt buộc: Nếu câu hỏi có các lựa chọn đáp án (Trắc nghiệm), thì trong đề phải luôn có chính xác 4 lựa chọn (A, B, C, D). Nếu câu hỏi gốc bị thiếu lựa chọn hoặc chỉ có ít hơn 4 lựa chọn, hãy tự động giả định hoặc bổ sung các phương án gây nhiễu hợp lý để tạo thành đủ 4 lựa chọn đáp án (A, B, C, D) cho người dùng trước khi phân tích.
      Nếu câu hỏi đầu vào vốn có chứa định dạng JSON hoặc text cấu trúc phức tạp, hãy tự động trích ra các trường thông tin chính để giải đáp chuẩn xác.
      Nếu có từ vựng quan trọng (đối với phần verbal) hoặc khái niệm quan trọng (đối với phần math), hãy liệt kê chúng ra.
      Trình bày dưới dạng JSON như sau:
      {
         "questionSummary": "Tóm tắt ngắn gọn câu hỏi. Nếu câu hỏi có các lựa chọn trắc nghiệm, cần liệt kê đầy đủ cả 4 lựa chọn A, B, C, D ở đây.",
         "correctAnswer": "Khóa đáp án đúng (ví dụ: 'A' hoặc 'A) ...')",
         "explanation": "Giải thích chi tiết bằng ngôn ngữ chính là tiếng Việt (kèm thuật ngữ tiếng Anh), làm rõ lý do vì sao đáp án đã chọn là chính xác và 3 đáp án còn lại là không chính xác.",
         "keyTerms": [
            { "term": "Từ tiếng anh", "definition": "Định nghĩa tiếng việt" }
         ]
      }`;
      
      contents.push(prompt);

      if (req.file) {
        contents.push({
           inlineData: {
              data: req.file.buffer.toString("base64"),
              mimeType: req.file.mimetype
           }
        });
      } else if (imageUrl) {
        // Simple heuristic: if we only have URL, we'll try to fetch it or pass it. 
        // Gemini supports URLs in some contexts, but usually inlineData is safer.
        // For simplicity, we just pass the URL in the text if we can't fetch it, 
        // wait, we can fetch it here and convert to inlineData!
        try {
          const imgResp = await fetch(imageUrl);
          if (imgResp.ok) {
            const buf = await imgResp.arrayBuffer();
            const mime = imgResp.headers.get('content-type') || 'image/jpeg';
            contents.push({
               inlineData: {
                  data: Buffer.from(buf).toString('base64'),
                  mimeType: mime
               }
            });
          }
        } catch(e) {
          console.error("Failed to fetch image URL", e);
          // Just fall back to passing the URL in prompt
          contents[0] += `\nĐường dẫn ảnh: ${imageUrl}`;
        }
      }

      // Call Gemini 3.5 Flash
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
           responseMimeType: "application/json"
        }
      });

      let rawJson = (response.text || "{}").trim();
      if (rawJson.startsWith("```")) {
        rawJson = rawJson.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
      }
      const parsedData = JSON.parse(rawJson);

      res.json(parsedData);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Failed to analyze question" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
