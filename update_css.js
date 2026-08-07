const fs = require('fs');
const path = require('path');

const files = [
  'temporada1/style_temporada1.css',
  't3mp0rada2/t3mporada2.css',
  'ura-on/Ura0n.css'
];

const basePath = 'c:\\Users\\gusta\\repo code\\K-on-_Ver_ESP-Fanweb-27.net';

for (const file of files) {
  const fullPath = path.join(basePath, file);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    continue;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');

  // Insert :root
  if (!content.includes(':root')) {
    content = `:root {\n  --bg: #f2f0ff;\n  --primary: #c59cff;\n  --secondary: #ff9ecf;\n  --accent: #ffe48c;\n  --text: #3d3d50;\n}\n\n` + content;
  }

  // Replace body background
  content = content.replace(/body\s*\{[\s\S]*?background-color:\s*#111;[\s\S]*?color:\s*white;[\s\S]*?\}/g, (match) => {
    return match.replace('#111', 'var(--bg)').replace('white', 'var(--text)');
  });
  
  content = content.replace(/body\s*\{[\s\S]*?color:\s*#fff;[\s\S]*?overflow-x:\s*hidden;[\s\S]*?\}/g, (match) => {
    return match.replace('#fff', 'var(--text)');
  });

  // Replace header h1
  content = content.replace(/header\s*h1\s*\{[\s\S]*?color:\s*#fd0026;[\s\S]*?text-shadow:[\s\S]*?white;[\s\S]*?\}/g, (match) => {
    return `header h1 {font-size: 2.5em;\n    color: var(--primary);\n    text-shadow:\n  -2px -2px 0 var(--accent),\n   2px -2px 0 var(--accent),\n  -2px  2px 0 var(--accent),\n   2px  2px 0 var(--accent);\nmargin-bottom: 10px;\n}`;
  });

  // Replace header p
  content = content.replace(/header\s*p\s*\{[\s\S]*?color:\s*#fcfdfd;[\s\S]*?background:\s*rgba\(0,\s*0,\s*0,\s*0\.3\);[\s\S]*?border-radius:\s*15px;[\s\S]*?\}/g, (match) => {
    return match.replace('#fcfdfd', 'var(--text)')
                .replace('rgba(0, 0, 0, 0.3)', 'rgba(255, 255, 255, 0.7)')
                .replace('border-radius: 15px', 'border-radius: 12px;\n  box-shadow: 0 4px 12px #0002;\n  border: 2px solid var(--accent)');
  });
  
  // Replace creadores button
  content = content.replace(/\.creadores\s*\{[\s\S]*?background-color:\s*#ff0000;[\s\S]*?color:\s*rgb\(255,\s*255,\s*255\);[\s\S]*?border-radius:\s*8px;[\s\S]*?\}/g, (match) => {
    return match.replace('background-color: #ff0000', 'background: linear-gradient(to bottom, var(--accent), var(--secondary))')
                .replace('color: rgb(255, 255, 255)', 'color: var(--text)')
                .replace('border-radius: 8px', 'border-radius: 12px;\n  box-shadow: 0 4px 12px #0002;\n  font-weight: bold')
                .replace('border: none', 'border: 1px solid #fff');
  });
  
  content = content.replace(/\.creadores:hover\s*\{[\s\S]*?background-color:\s*#ff8383;[\s\S]*?\}/g, (match) => {
    return `.creadores:hover {\n  transform: scale(1.05);\n  filter: brightness(1.1);\n}`;
  });

  // Replace overlay / popup
  content = content.replace(/\.popup\s*\{[\s\S]*?background:\s*#222;[\s\S]*?border-radius:\s*15px;[\s\S]*?box-shadow:\s*0\s*0\s*20px\s*rgba\(255,\s*255,\s*255,\s*0\.2\);[\s\S]*?\}/g, (match) => {
    return match.replace('background: #222', 'background: var(--bg)')
                .replace('border-radius: 15px', 'border-radius: 12px;\n      border: 3px dashed var(--secondary);\n      color: var(--text)')
                .replace('box-shadow: 0 0 20px rgba(255, 255, 255, 0.2)', 'box-shadow: 0 4px 12px #0002');
  });
  
  content = content.replace(/\.popup\s*span\s*\{[\s\S]*?color:\s*#00ffae;[\s\S]*?\}/g, (match) => {
    return match.replace('color: #00ffae', 'color: var(--primary);\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.1)');
  });

  // Replace popup buttons
  content = content.replace(/\.popup\s*button\s*\{[\s\S]*?background:\s*#00aaff;[\s\S]*?border-radius:\s*8px;[\s\S]*?\}/g, (match) => {
    return match.replace('background: #00aaff', 'background: linear-gradient(to bottom, var(--primary), var(--secondary))')
                .replace('border-radius: 8px', 'border-radius: 12px;\n      box-shadow: 0 4px 12px #0002')
                .replace('border: none', 'border: 1px solid var(--primary)');
  });
  
  content = content.replace(/\.popup\s*button:hover\s*\{[\s\S]*?background:\s*#0088cc;[\s\S]*?\}/g, (match) => {
    return `.popup button:hover {\n      background: linear-gradient(to bottom, var(--secondary), var(--primary));\n      transform: scale(1.05);\n    }`;
  });
  
  // Replace background video
  content = content.replace(/#bg-video\s*\{[\s\S]*?filter:\s*brightness\(0\.5\);[\s\S]*?\}/g, (match) => {
    return match.replace('filter: brightness(0.5)', 'opacity: 0.15;\n    mix-blend-mode: overlay');
  });

  // Replace main
  content = content.replace(/main\s*\{[\s\S]*?background-color:\s*rgba\(255,\s*255,\s*255,\s*0\.05\);[\s\S]*?border-radius:\s*20px;[\s\S]*?\}/g, (match) => {
    return match.replace('background-color: rgba(255, 255, 255, 0.05)', 'background-color: rgba(255, 255, 255, 0.6)')
                .replace('border-radius: 20px', 'border-radius: 12px;\n    box-shadow: 0 4px 12px #0002;\n    border: 2px dashed var(--primary)');
  });
  
  content = content.replace(/main\s*h2\s*\{[\s\S]*?color:\s*#ffd6e0;[\s\S]*?\}/g, (match) => {
    return match.replace('color: #ffd6e0', 'color: var(--primary);\n    text-shadow: 1px 1px 0px white');
  });
  
  content = content.replace(/main\s*h3\s*\{[\s\S]*?color:\s*aqua;[\s\S]*?\}/g, (match) => {
    return match.replace('color: aqua', 'color: var(--text)');
  });

  // Replace episode-card
  content = content.replace(/\.episode-card\s*\{[\s\S]*?background-color:\s*rgba\(255,\s*255,\s*255,\s*0\.1\);[\s\S]*?border-radius:\s*15px;[\s\S]*?\}/g, (match) => {
    return match.replace('background-color: rgba(255, 255, 255, 0.1)', 'background-color: white')
                .replace('border-radius: 15px', 'border-radius: 12px;\n    box-shadow: 0 4px 12px #0002;\n    border: 1px solid var(--accent);\n    color: var(--text)');
  });

  // Replace main buttons
  content = content.replace(/button\s*\{[\s\S]*?background-color:\s*#ffb6c1;[\s\S]*?border-radius:\s*20px;[\s\S]*?color:\s*#333;[\s\S]*?\}/g, (match) => {
    return match.replace('background-color: #ffb6c1', 'background: linear-gradient(to bottom, var(--primary), var(--secondary))')
                .replace('border-radius: 20px', 'border-radius: 12px;\n    box-shadow: 0 4px 12px #0002;\n    text-shadow: 1px 1px 2px rgba(0,0,0,0.3)')
                .replace('color: #333', 'color: white')
                .replace('border: none', 'border: 1px solid #fff');
  });
  
  content = content.replace(/button:hover\s*\{[\s\S]*?background-color:\s*#ff89a5;[\s\S]*?\}/g, (match) => {
    return `button:hover {\n    filter: brightness(1.1);\n    transform: scale(1.05);\n}`;
  });

  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${file}`);
}
