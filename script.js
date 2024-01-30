const sliderPaginationOne = document.querySelector(".circle-one");
const sliderPaginationTwo = document.querySelector(".circle-two");
const sliderPaginationThree = document.querySelector(".circle-three");
const sliderLine = document.querySelector(".swiper_line");

sliderPaginationOne.addEventListener("click", function () {
  sliderPaginationOne.classList.add("clicked");
  sliderPaginationTwo.classList.remove("clicked");
  sliderPaginationThree.classList.remove("clicked");
  sliderLine.classList.add("move-one");
  sliderLine.classList.remove("move-two");
  sliderLine.classList.remove("move-three");
});
sliderPaginationTwo.addEventListener("click", function () {
  sliderPaginationOne.classList.remove("clicked");
  sliderPaginationTwo.classList.add("clicked");
  sliderPaginationThree.classList.remove("clicked");
  sliderLine.classList.remove("move-one");
  sliderLine.classList.add("move-two");
  sliderLine.classList.remove("move-three");
});
sliderPaginationThree.addEventListener("click", function () {
  sliderPaginationOne.classList.remove("clicked");
  sliderPaginationTwo.classList.remove("clicked");
  sliderPaginationThree.classList.add("clicked");
  sliderLine.classList.remove("move-one");
  sliderLine.classList.remove("move-two");
  sliderLine.classList.add("move-three");
});

function mySlider (click1,click2,click3) {
	
}