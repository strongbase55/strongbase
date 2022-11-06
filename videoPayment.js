let jo1 = document.getElementById("low-card-1");
let rough1 = document.getElementById("up-1");
let gange1 = document.getElementById("down-1");

function nice1() {
    let mm;
    if (mm == true) {
        jo1.style.display = "none";
        rough1.style.display = "none";
        gange1.style.display = "block";
    } else {
        jo1.style.display = "flex";
        rough1.style.display = "block";
        gange1.style.display = "none";
    }
}

function Notnice1() {
    let nn;
    if (nn == true) {
        jo1.style.display = "flex";
        rough1.style.display = "block";
        gange1.style.display = "none";

    } else {
        jo1.style.display = "none";
        rough1.style.display = "none";
        gange1.style.display = "block";
    }
}



let rose = document.getElementById("total")
let jasmine = document.getElementById("method-1")
let gold = document.getElementById("video-1")

function OpenPayment() {
    let lily;
    if (lily == true) {
        rose.style.display = "block"
        jasmine.style.display = "none"
    } else {

        rose.style.display = "none"
        jasmine.style.display = "flex"
    }
}

function ClosePayment() {
    let lavender;
    if (lavender == true) {
        rose.style.display = "none"
        jasmine.style.display = "flex"
    } else {
        rose.style.display = "block"
        jasmine.style.display = "none"
        gold.style.display = "none"
    }
}

function VideoOpen() {
    let diamond
    if (diamond == true) {
        gold.style.display = "none"
    } else {
        alert("Enjoy the preview")
        gold.style.display = "block"
        rose.style.display = "none"
    }
}
let vi = document.getElementById("video-id")

function VideoClose() {
    let paltinum
    if (paltinum == true) {
        gold.style.display = "block"
        rose.style.display = "none"
    } else {
        vi.pause()
        gold.style.display = "none"
        rose.style.display = "block"
    }
}

function Play() {
    vi.play()
}