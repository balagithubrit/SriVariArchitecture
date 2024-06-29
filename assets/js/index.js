let slideIndex = 1;
let time = 6000;
let timeoutOnAuto = 0;
let timeoutOnManual = 0;
let timeoutOnDot = 0;

function plusSlides(n) {
  clearTimeout(timeoutOnManual);
  clearTimeout(timeoutOnAuto);
  clearTimeout(timeoutOnDot);
  showSlides((slideIndex += n));
  time = 10000;
  timeoutOnManual = setTimeout(showSlidesAuto, time);
}

function currentSlide(n) {
  clearTimeout(timeoutOnManual);
  clearTimeout(timeoutOnAuto);
  clearTimeout(timeoutOnDot);
  showSlides((slideIndex = n));
  time = 10000;
  timeoutOnDot = setTimeout(showSlidesAuto, time);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  time = 6000;
  timeoutOnAuto = setTimeout(showSlidesAuto, time);
}
