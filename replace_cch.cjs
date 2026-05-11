const fs = require('fs');
const path = require('path');

const projectDir = 'c:\\Users\\Cc\\Desktop\\cadet-web';
const srcDir = path.join(projectDir, 'src');
const tailwindConfig = path.join(projectDir, 'tailwind.config.ts');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceInFile(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace CCH with BCS
    content = content.replace(/CCH/g, 'BCS');
    // Replace cch with bcs
    content = content.replace(/cch/g, 'bcs');
    // Replace Cch with Bcs
    content = content.replace(/Cch/g, 'Bcs');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
}

walkDir(srcDir, replaceInFile);
replaceInFile(tailwindConfig);
console.log("Replacement complete.");
