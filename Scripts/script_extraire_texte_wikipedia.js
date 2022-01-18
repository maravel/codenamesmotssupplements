
let text = "";
let filename = "box_office.txt";

$("#mw-content-text .wikitable tr td:nth-child(2) i > a").each((index, elt)=> { text += $(elt).html() + "\n" });


var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);