const startHeightValue = () => {
  const pageHeader = document.querySelector('.header');

  const headerHeight = pageHeader ? pageHeader.offsetHeight : 0;

  document.documentElement.style.setProperty(
    '--header-height',
    `${headerHeight}px`
  );
};

window.addEventListener('resize', startHeightValue);
window.addEventListener('scroll', startHeightValue);

startHeightValue();
