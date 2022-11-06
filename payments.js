let onepay = document.getElementById("col-1")
let twopay = document.getElementById("col-2")
let threepay = document.getElementById("col-3")
let fourpay = document.getElementById("col-4")
let fivepay = document.getElementById("col-5")
let sixpay = document.getElementById("col-6")

function PhonePe() {
    let a;
    if (a == true) {
        onepay.style.display = "block"
        twopay.style.display = "none"
    } else {
        onepay.style.display = "none"
        twopay.style.display = "block"
        threepay.style.display = "none"
        fourpay.style.display = "none"
        fivepay.style.display = "none"
        sixpay.style.display = "none"
    }
}

function GooglePe() {
    let b;
    if (b == true) {
        onepay.style.display = "block"
        threepay.style.display = "none"
    } else {
        onepay.style.display = "none"
        twopay.style.display = "none"
        threepay.style.display = "block"
        fourpay.style.display = "none"
        fivepay.style.display = "none"
        sixpay.style.display = "none"
    }
}

function Paytem() {
    let c;
    if (c == true) {
        onepay.style.display = "block"
        fourpay.style.display = "none"
    } else {
        onepay.style.display = "none"
        twopay.style.display = "none"
        threepay.style.display = "none"
        fourpay.style.display = "block"
        fivepay.style.display = "none"
        sixpay.style.display = "none"
    }
}

function AmazonPay() {
    let d;
    if (d == true) {
        onepay.style.display = "block"
        fivepay.style.display = "none"
    } else {
        onepay.style.display = "none"
        twopay.style.display = "none"
        threepay.style.display = "none"
        fourpay.style.display = "none"
        fivepay.style.display = "block"
        sixpay.style.display = "none"
    }
}

function PayPal() {
    let e;
    if (e == true) {
        onepay.style.display = "block"
        sixpay.style.display = "none"
    } else {
        onepay.style.display = "none"
        twopay.style.display = "none"
        threepay.style.display = "none"
        fourpay.style.display = "none"
        fivepay.style.display = "none"
        sixpay.style.display = "block"
    }
}