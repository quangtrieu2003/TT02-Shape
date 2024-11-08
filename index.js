  // thanh mennu
  const toggleButton = document.getElementById("toggleButton");
  const menu = document.getElementById("header__ul");
  
  toggleButton.addEventListener("click", () => {
    // menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    // document.getElementById("menuButton").addEventListener("click");
    console.log(menu);
    menu.classList.toggle("show");
  });
    
    //  slide dự án 
const container7slider = document.querySelector("#container-7__slider");
const container7sliders = document.querySelectorAll("#container-7__slider > div");
const duAnBtnLeft = document.querySelector("#duan-slider-prev");
const duAnBtnRight = document.querySelector("#duan-slider-next");
const duAnLength = container7sliders.length;
let duAnCurrent = 0;

const duAnHandleChangeSlide = () => {
  if (duAnCurrent == duAnLength - 1) {
    duAnCurrent = 0;
    container7slider.style.transform = `translateX(0%)`;
  } else {
    duAnCurrent++;
    container7slider.style.transform = `translateX(${-50 * duAnCurrent}%)`;
  }
};
duAnBtnRight.addEventListener("click", () => {
  duAnHandleChangeSlide();
});

duAnBtnLeft.addEventListener("click", () => {
  if (duAnCurrent == 0) {
    duAnCurrent = duAnLength - 1;
    container7slider.style.transform = `translateX(${-50 * duAnCurrent}%)`;
  } else {
    duAnCurrent--;
    container7slider.style.transform = `translateX(${-50 * current}%)`;
  }
});




function toggleImage(id) {
  const imageContainer = document.getElementById(id);

  // Kiểm tra trạng thái hiển thị hiện tại và chuyển đổi
  if (
    imageContainer.style.display === "none" ||
    imageContainer.style.display === ""
  ) {
    imageContainer.style.display = "block"; // Hiện ảnh
  } else {
    imageContainer.style.display = "none"; // Ẩn ảnh
  }
}
