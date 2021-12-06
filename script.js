// buat fungsi setBg
const setBg = () => {
// const color berisi array warna
const color = Math.floor(Math.random()*16777215).toString(16);

// kenakan warna tersebut ke body
document.body.style.background = "#"+color;

// colorName
colorName.innerHTML = "Color Code: #" + color;
}


// addEventListener saat click button
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener('click', setBg);
setBg();