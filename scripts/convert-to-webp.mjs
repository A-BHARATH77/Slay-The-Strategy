import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function convertDir(dir) {
  try {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        await convertDir(fullPath);
      } else {
        const ext = path.extname(item.name).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          try {
            const newName = item.name.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
            const newPath = path.join(dir, newName);
            
            if (fs.existsSync(newPath)) {
              console.log(`Skipping ${fullPath} - ${newName} already exists.`);
              continue;
            }

            await sharp(fullPath)
              .webp()
              .toFile(newPath);
              
            console.log(`Converted ${fullPath} -> ${newName}`);
          } catch (innerErr) {
            console.error(`Failed to convert ${fullPath}:`, innerErr.message);
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

async function start() {
  console.log('Starting bulk conversion in /public...');
  await convertDir(publicDir);
  console.log('Bulk conversion complete!');
}

start();
