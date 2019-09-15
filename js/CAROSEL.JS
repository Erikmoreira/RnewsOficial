let sliderContent = document.querySelector(".slider2-content");

let video = document.querySelectorAll(".slider2-content > video");

let radioContent = document.querySelector(".slider2 .radio-buttons");

let current = 0;

video.forEach(function (elem, index) {

    let label = document.createElement("label");
    let input = document.createElement("input");
    let span = document.createElement("span");
    input.addEventListener('click', function () {
        setCurrentImage(index);
    }, false);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "radio-buttons");
    label.appendChild(input);
    label.appendChild(span);
    radioContent.appendChild(label);
});
let inputs = document.querySelectorAll(".radio-buttons input");
inputs[current].checked = true;
function setCurrentImage(index) { 
    current = index;
    video.forEach(e => e.style.display = 'none');
    inputs.forEach(e => e.checked = false);
    video[current].style.display = "block";
    inputs[current].checked = true;
}
sliderContent.addEventListener('click', function (e) {
    if (e.target.localName === 'video') {
        current = current === 0 ? video.length - 1 : current - 1;
        setCurrentImage(current);
    }
}, false);
sliderContent.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (e.target.localName === 'video') {
        
        current = current === video.length - 1 ? 0 : current + 1;
        setCurrentImage(current);
    }
}, false);
sliderContent.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
        current = current === 0 ? video.length - 1 : current - 1;
        setCurrentImage(current);
    } else {
        current = current === video.length - 1 ? 0 : current + 1;
        setCurrentImage(current);
    }
}, false);
sliderContent.addEventListener('click', function (e) {
    if (e.target.className === 'prev-image') {
        current = current === 0 ? video.length - 1 : current - 1;
        setCurrentImage(current);
    }
}, false);
sliderContent.addEventListener('click', function (e) {
    if (e.target.className === 'next-image') {
        current = current ===video .length - 1 ? 0 : current + 1;
        setCurrentImage(current);
    }
}, false);
setCurrentImage(current);