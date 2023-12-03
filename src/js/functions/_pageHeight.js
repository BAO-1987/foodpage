const pageHeight = () => {
  let vh = window.innerHeight * 1;
  document.querySelector(':root').style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', pageHeight);
window.addEventListener('scroll', pageHeight);

pageHeight();
