


let text = "";
let filename = "sex_symbols.txt";

$("#mw-content-text .colonnes ul li > a").each((index, elt)=> { text += $(elt).html() + "\n" });


var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);