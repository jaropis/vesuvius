// let canvas = document.getElementById("canvas");
// console.log("dupa")
// console.log(canvas)
// console.log("dupa")
// let ctx = canvas.getContext("2d");

// let image = new Image();
// image.src = "assets/BRF2.interphase-montage-0.png";
// image.addEventListener("load", () => {
//     ctx.drawImage(image, 0, 0);
// });
// let imgEle1 = document.querySelectorAll(".image")[0];
// let imgEle2 = document.querySelectorAll(".image")[1];
// let resEle = document.querySelector(".result");
// var context = resEle.getContext("2d");
// let BtnEle = document.querySelector(".Btn");
// BtnEle.addEventListener("click", () => {
//     resEle.width = imgEle1.width;
//     resEle.height = imgEle1.height;
//     context.globalAlpha = 1.0;
//     context.drawImage(imgEle1, 0, 0);
//     context.globalAlpha = 0.5;
//     context.drawImage(imgEle2, 0, 0);
// });

// mergeImages([
//     { src: "assets/BRF2.interphase-montage-0.png" },
//     { src: "assets/BRF2.interphase-montage-1.png", opacity: 0.7 }
// ])
// .then(b64 => document.querySelector('img').src = b64);

//import mergeImages from 'merge-images';

//mergeImages(['assets/BRF2.interphase-montage-0.png', 'assets/BRF2.interphase-montage-1.png'])
//    .then(b64 => document.querySelector('img').src = b64);
function slide_top(img_name, filter_string) {
    return function slide(e) {
        console.log("brightness(" + e.srcElement.value + "%)" + filter_string)
        document.getElementsByClassName(img_name)[0].style.filter = "brightness(" + e.srcElement.value + "%)" + filter_string;
    }
}
window.onload = function () {
    var brightness_slider1 = document.getElementById('brightness_0');
    brightness_slider1.addEventListener('change', slide_top('img0', " opacity(0.7) contrast(100%) sepia(1) hue-rotate(180deg) saturate(4)"));
    var brightness_slider2 = document.getElementById('brightness_1');
    brightness_slider2.addEventListener('change', slide_top('img1', " opacity(0.7) contrast(100%) sepia(1) hue-rotate(70deg) saturate(4)"));
};