//

const navigation = document.querySelector(".header");
const page = document.querySelector(".page");
navigation.addEventListener("click", BurgerBtnClick);

function BurgerBtnClick(e) {
  if (!e.target.parentNode.matches(".burger__body") && !e.target.matches(".burger__body")) return;
  e.addEventListener;
  this.classList.remove("closed");
  page.classList.add("open");
  if (this.matches(".opened")) {
    this.classList.add("closed");
    page.classList.remove("open");
    setTimeout(() => {
      this.classList.remove("opened");
    }, 500);
  }
  this.classList.add("opened");
}
