import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

/**
 * Capture an existing element by its ID and download it as a PNG image with a premium branded header and footer.
 */
export const exportToPng = async (elementId: string, title: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found.`);
    return;
  }

  // Create a styled wrapper container positioned off-screen to generate accurate bounds
  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '10px';
  wrapper.style.top = '-9999px';
  wrapper.style.width = '1120px';
  wrapper.style.backgroundColor = '#ffffff';
  wrapper.style.borderRadius = '24px';
  wrapper.style.border = '4px solid #000000';
  wrapper.style.boxSizing = 'border-box';
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.fontFamily = '"Inter", sans-serif';
  wrapper.style.overflow = 'hidden';
  wrapper.style.zIndex = '-9999';
  wrapper.style.boxShadow = '12px 12px 0px 0px #000000';

  // Premium Branded Header
  const header = document.createElement('div');
  header.style.backgroundColor = '#fffdf0';
  header.style.borderBottom = '5px solid #000000';
  header.style.padding = '24px 32px';
  header.className = 'flex justify-between items-center select-none';
  header.innerHTML = `
    <div class="flex flex-col justify-center">
      <h1 class="text-xl font-extrabold text-black uppercase tracking-tight m-0" style="margin: 0; font-family: 'Inter', sans-serif; line-height: 1;">
        REMIX: SAT DRILLS
      </h1>
      <p class="text-xs font-semibold text-[#dc2323] uppercase tracking-wider mt-1 m-0" style="margin: 4px 0 0 0; font-family: 'Inter', sans-serif; line-height: 1;">
        Digital SAT Companion & Study Deck • ${title}
      </p>
    </div>
    <div class="bg-[#dc2323] text-white font-black text-xs px-4 py-3 rounded-full uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 flex items-center justify-center text-center" style="font-family: 'Inter', sans-serif; height: 32px; line-height: 1;">
      @SAT_DRILLS
    </div>
  `;
  wrapper.appendChild(header);

  // Content Container block
  const contentContainer = document.createElement('div');
  contentContainer.style.padding = '40px';
  contentContainer.style.backgroundColor = '#ffffff';
  contentContainer.style.flexGrow = '1';

  // Clone element content
  const clone = element.cloneNode(true) as HTMLElement;
  
  // Hide all interactive or unnecessary elements in cloned content
  const itemsToHide = clone.querySelectorAll('.export-button-hide, button, select, input[type="text"], nav, .nav-tabs');
  itemsToHide.forEach(item => {
    (item as HTMLElement).style.setProperty('display', 'none', 'important');
  });

  // Make sure opacity properties are normalized and translucent colors are flattened
  const allClonedElements = clone.querySelectorAll('*');
  allClonedElements.forEach(item => {
    const el = item as HTMLElement;
    if (el.style.opacity && parseFloat(el.style.opacity) < 1) {
      el.style.opacity = '1';
    }
    const computedStyles = window.getComputedStyle(el);
    const bg = computedStyles.backgroundColor;
    if (bg && (bg.includes('rgba') || bg.includes('hsla'))) {
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        const a = match[4] ? parseFloat(match[4]) : 1;
        if (a < 1) {
          const nr = Math.round(r * a + 255 * (1 - a));
          const ng = Math.round(g * a + 255 * (1 - a));
          const nb = Math.round(b * a + 255 * (1 - a));
          el.style.backgroundColor = `rgb(${nr}, ${ng}, ${nb})`;
        }
      }
    }
  });

  // Replace CORS-blocked presentation iFrames
  const iframes = clone.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    const placeholder = document.createElement('div');
    placeholder.style.width = '100%';
    placeholder.style.aspectRatio = '16/10';
    placeholder.style.backgroundColor = '#1a202c';
    placeholder.style.borderRadius = '16px';
    placeholder.style.border = '5px solid #000000';
    placeholder.style.boxShadow = '8px 8px 0px 0px #000000';
    placeholder.style.display = 'flex';
    placeholder.style.flexDirection = 'column';
    placeholder.style.alignItems = 'center';
    placeholder.style.justifyContent = 'center';
    placeholder.style.padding = '40px';
    placeholder.style.color = '#ffffff';
    placeholder.style.textAlign = 'center';
    placeholder.style.boxSizing = 'border-box';
    
    placeholder.innerHTML = `
      <div style="font-size: 64px; margin-bottom: 20px;">📊</div>
      <div style="font-size: 28px; font-weight: 900; color: #ffe36d; margin-bottom: 12px; font-family: 'Inter', sans-serif; letter-spacing: -0.02em;">ONLINE PRESENTATION SLIDE</div>
      <div style="font-size: 16px; font-weight: 600; color: #cbd5e1; margin-bottom: 24px; font-family: 'Inter', sans-serif; max-w-lg; line-height: 1.5;">Bài giảng PowerPoint trực tuyến đang phát sóng chi tiết trên hệ thống SAT DRILLS. Quét mã QR hoặc truy cập ứng dụng để làm bài tập tương tác!</div>
      <div style="display: flex; gap: 12px; align-items: center; justify-content: center;">
        <span style="font-size: 13px; font-weight: 800; background-color: #dc2323; color: white; padding: 8px 20px; border-radius: 9999px; text-transform: uppercase; border: 3px solid #000000; box-shadow: 3px 3px 0px 0px #000000;">Course Companion</span>
        <span style="font-size: 13px; font-weight: 800; background-color: #ffffff; color: #000000; padding: 8px 20px; border-radius: 9999px; text-transform: uppercase; border: 3px solid #000000; box-shadow: 3px 3px 0px 0px #000000;">@SAT_DRILLS</span>
      </div>
    `;
    if (iframe.parentNode) {
      iframe.parentNode.replaceChild(placeholder, iframe);
    }
  });

  contentContainer.appendChild(clone);
  wrapper.appendChild(contentContainer);

  // Ultimate Pro One-Row Footer
  const footer = document.createElement('div');
  footer.style.backgroundColor = '#f9fafb';
  footer.style.borderTop = '2px solid #e5e7eb';
  footer.style.padding = '20px 32px';
  footer.className = 'flex flex-row justify-between items-center text-xs text-gray-600 font-sans tracking-tight whitespace-nowrap select-none gap-4';
  footer.innerHTML = `
    <div class="flex items-center gap-2 text-xs text-gray-600">
        <span class="font-bold">© 2026 REMIX: SAT DRILLS</span>
        <span class="text-gray-300">|</span>
        <span>Website: <span class="text-blue-600 font-bold">ieltsdrills.com/sat_drills</span></span>
    </div>
    <div class="flex-shrink-0 flex items-center justify-center">
        <span class="bg-[#dc2323] text-white text-[11px] font-black uppercase tracking-wider px-4 rounded-full border-2 border-black flex items-center justify-center text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap" style="height: 32px; line-height: 1;">
            Luyện IELTS ở IELTS Drills
        </span>
    </div>
  `;
  wrapper.appendChild(footer);

  document.body.appendChild(wrapper);

  // Microtask wait to allow heavy layouts and Tailwind styles to set up
  await new Promise(resolve => setTimeout(resolve, 300));

  try {
    const dataUrl = await toPng(wrapper, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      styleSheetsFilter: (sheet) => {
        try {
          const rules = sheet.cssRules;
          return true;
        } catch (e) {
          return false;
        }
      },
    });
    saveAs(dataUrl, `${filename}.png`);
  } catch (err) {
    console.error('Error generating element snapshot via html-to-image:', err);
  } finally {
    if (document.body.contains(wrapper)) {
      document.body.removeChild(wrapper);
    }
  }
};

/**
 * Capture an existing element by its ID and download it as a self-contained HTML document with correct styling.
 */
export const exportToHtml = (elementId: string, title: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found.`);
    return;
  }

  const clone = element.cloneNode(true) as HTMLElement;
  
  // Hide all interactive controls from exported HTML output
  const itemsToHide = clone.querySelectorAll('.export-button-hide, button, select, input[type="text"], nav, .nav-tabs');
  itemsToHide.forEach(item => {
    (item as HTMLElement).style.display = 'none';
  });

  const contentHtml = clone.innerHTML;

  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - REMIX: SAT DRILLS</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7fafc;
        }
        .serif-font {
            font-family: 'Playfair Display', Georgia, serif;
        }
        .mono-font {
            font-family: 'JetBrains Mono', monospace;
        }
    </style>
</head>
<body class="bg-[#f7fafc] flex flex-col min-h-screen py-10 px-4 font-sans">
    <!-- Main Export Container -->
    <div class="max-w-4xl w-full mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between" style="min-height: 700px;">
        
        <!-- Header -->
        <div class="bg-[#fffdf0] border-b-[5px] border-black p-6 md:p-8 flex justify-between items-center select-none">
            <div>
                <h1 class="text-xl md:text-2xl font-extrabold text-black uppercase tracking-tight">
                    REMIX: SAT DRILLS
                </h1>
                <p class="text-xs font-semibold text-[#dc2323] uppercase tracking-wider mt-1">
                    Digital SAT Companion & Study Deck • ${title}
                </p>
            </div>
            <div class="bg-[#dc2323] text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                @SAT_DRILLS
            </div>
        </div>
        
        <!-- Content Body -->
        <div class="p-8 md:p-12 flex-grow bg-white">
            ${contentHtml}
        </div>
        
        <!-- Balanced, Guaranteed Single-Row Footer with Red Highlight Pill -->
        <div class="bg-gray-50 border-t border-gray-200 px-8 py-5 flex flex-row justify-between items-center text-xs text-gray-600 font-sans tracking-tight whitespace-nowrap select-none gap-4">
            <div class="flex items-center gap-2">
                <span class="font-bold">© 2026 REMIX: SAT DRILLS</span>
                <span class="text-gray-300">|</span>
                <span>Website: <a href="https://ieltsdrills.com/sat_drills" target="_blank" class="text-blue-600 font-extrabold hover:underline">ieltsdrills.com/sat_drills</a></span>
            </div>
            <div class="flex-shrink-0 flex items-center justify-center">
                <a href="https://ieltsdrills.com" target="_blank" class="bg-[#dc2323] hover:bg-[#b01c1c] text-white text-[11px] font-black uppercase tracking-wider px-4 rounded-full border-2 border-black flex items-center justify-center text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap" style="height: 32px; line-height: 1;">
                    Luyện IELTS ở IELTS Drills
                </a>
            </div>
        </div>
    </div>
</body>
</html>`;

  const blob = new Blob([htmlTemplate], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
