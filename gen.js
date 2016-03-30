'use strict';
let fs = require('fs');
let lodash = require('lodash');
let content = fs.readFileSync('index.html', 'utf8');



console.log(lodash.template(content)({
    output: [
        '<select>',
        (new Array(1001)).fill(0).map((v, i) => `<option value="value_${i}">Value ${i}</option>`).join('\n'),
        '</select>'
    ].join('\n')
}));
