let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
    
</header>
<section id="section">


</section>
<footer id="footer">
</footer>
`;

/*let style = document.getElementById("style");
style.innerHTML = `

header {

    textAlign: center;

}

`;*/


let header = document.getElementById("header");
header.innerHTML = `
<h1>Программа: Postyk</h1>
<p>Поменять цвет фона. Например: введите любой цвет по английски:</p>
<input id="body background">

<button type="button" onclick="createBodyBackground()">OK</button>

<p>Введите текст на любом языке:</p>
<input id="text">

<button type="button" onclick="createText()">OK</button>

<p>Поменять размер текста. Введите цифровое значение в px. Например: 20px...100px:</p>
<input id="font size">

<button type="button" onclick="createText()">OK</button>

<p>Укажите позицию текста по английски. Например: left, right, center:</p>
<input id="poziciyaText">

<button type="button" onclick="createText()">OK</button>

<p>Изменить цвет текста. Например: введите любой цвет по английски:</p>
<input id="colorText">

<button type="button" onclick="createText()">OK</button>

<p>Ваш пост будет в рамке. Сделайте скриншот, вырежьте пост в фото-редакторе и поделитесь в соц сетях. </p>
<br>
`;

header.style.textAlign = 'center';
header.style.color = '#112244';


let section = document.getElementById("section");
section.innerHTML = `
       
        <p id="inText"></p>

`;
section.style.border = 'thick double #32a1ce';

let footer = document.getElementById('footer');
footer.innerHTML = `

<p>C уважением, Берлин Андрей.</p>

`;

footer.style.textAlign = 'center';



function createBodyBackground() {

    let bodyBackground = document.getElementById("body background").value;
    section.style.background = bodyBackground;

}

function createText() {

    let text = document.getElementById("text").value;

    let inText = document.getElementById("inText");
    inText.innerHTML = text;

    let textsize = document.getElementById("font size").value;
    inText.style.fontSize = textsize;

    let poziciyaText = document.getElementById("poziciyaText").value;
    inText.style.textAlign = poziciyaText;

    let colorText = document.getElementById("colorText").value;
    inText.style.color = colorText;


}
