const fs = require('fs');
const files = [
  'Work.tsx',
  'SelectedWork.tsx',
  'Intro.tsx',
  'Footer.tsx',
  'Expertises.tsx'
].map(f => 'components/' + f);

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/loading="lazy"/g, 'loading="eager"');
  fs.writeFileSync(f, content);
  console.log('Updated ' + f);
});
