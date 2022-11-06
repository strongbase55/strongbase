let images = [];
let time = 3000;
let i = 0;
images[0] =
    "https://lalanghijau.files.wordpress.com/2012/05/james-gosling-java.jpg";

images[1] =
    "data:image/jpeg;base64,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";
images[2] = "https://blog.eduonix.com/wp-content/uploads/2015/03/java-name-for-java-language.png"

function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;

/*this is for the menu page */
let menu2 = document.getElementById("nav-id");

function OpenMenuPage() {
    let josh;
    if (josh == true) {
        menu2.style.top = "-5000px";
    } else {
        menu2.style.top = "00%";
    }
}

function CloseMenuPage() {
    let funs;
    if (funs == true) {
        menu2.style.top = "0";
    } else {
        menu2.style.top = "-5000px";
    }
}
let jo = document.getElementById("low-card");
let rough = document.getElementById("up");
let gange = document.getElementById("down");

function nice() {
    let m;
    if (m == true) {
        jo.style.display = "none";
        rough.style.display = "none";
        gange.style.display = "block";
    } else {
        jo.style.display = "flex";
        rough.style.display = "block";
        gange.style.display = "none";
    }
}

function Notnice() {
    let n;
    if (n == true) {
        jo.style.display = "flex";
        rough.style.display = "block";
        gange.style.display = "none";
    } else {
        jo.style.display = "none";
        rough.style.display = "none";
        gange.style.display = "block";
    }
}







/*-------------------------------------------------------------this is for the contact page-------------------------------------------------------------------------------------------------------------------------------------*/
let founder = document.getElementById("contact-page")

function OpenContactPage() {
    let b;
    if (b == true) {
        founder.style.top = "-5000px"
    } else {
        founder.style.top = "0px"
    }
}

function CloseContactPage() {
    let a;
    if (a == true) {
        founder.style.top = "000px"
    } else {
        founder.style.top = "-5000px"
    }
}