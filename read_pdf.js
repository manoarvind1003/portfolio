const fs = require('fs');
const pdf = require('pdf-parse');
let data = fs.readFileSync('public/MANO ARVIND RESUME.pdf');
pdf(data).then(d => console.log(d.text)).catch(e => console.error(e));
