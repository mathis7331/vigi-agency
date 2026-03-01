const fs = require('fs');
const content = fs.readFileSync('src/app/components/sections/europe-paths.ts', 'utf-8');

const targets = ['HU', 'PL', 'IT', 'PT'];
targets.forEach(t => {
    const r = new RegExp('id:\\s*\\'' + t + '\\',.*?d:\\s*\\'M\\s * ([0 - 9.] +) \\s * ([0 - 9.] +)');
  const m = content.match(r);
    if (m) console.log(t, m[1], m[2]);
});
