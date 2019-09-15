const fs = require('fs')

let rawdata = fs.readFileSync('test-a.json')
let data = JSON.parse(rawdata)

let s_start = `<form action="" method="post">\n<ol>\n`
let s_end = `\n</ol>\n</form>`

for (let a of data) {
  let s = a.choices.map((y, x) => `\n\t<input type="radio" name="${a.name}" id="${a.name + x}" value="${x}">\n\t<label for="${a.name + x}">${y}</label><br/>`).join('')

  s = `<li>\n<fieldset>\n\t<legend>${a.question}:</legend><br/>\n` + s + '\n</fieldset>\n</li>\n'
  s_start += s
}

s_start += s_end
console.log(s_start)

