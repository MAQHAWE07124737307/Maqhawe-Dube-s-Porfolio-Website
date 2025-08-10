window.addEventListener("load", () => {
    document.querySelectorAll(".fill").forEach(bar => {
      const width = bar.style.width;
      bar.style.width = "0%"; // reset
      setTimeout(() => bar.style.width = width, 100); // animate
    });
  });

  const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');

menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});
