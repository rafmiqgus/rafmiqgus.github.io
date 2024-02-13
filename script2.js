document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(
    ".image-container img, .image-container2 img"
  );
  let offset = 0;

  const animateImages = () => {
    images.forEach((img) => {
      if (offset >= window.innerHeight) {
        offset = 0;
      }
      img.style.transform = `translateY(${offset}px)`;
    });

    offset += 1;
    requestAnimationFrame(animateImages);
  };

  animateImages();
});
