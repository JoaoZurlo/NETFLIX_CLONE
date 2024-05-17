export function setupScrolling() {
  const containers = Array.from(document.querySelectorAll(".movie-container"));
  const nextButtons = Array.from(document.querySelectorAll(".next-btn"));
  const prevButtons = Array.from(document.querySelectorAll(".pre-btn"));

  containers.forEach((container, index) => {
    const containerWidth = container.getBoundingClientRect().width;

    nextButtons[index].addEventListener('click', () => {
      container.scrollLeft += containerWidth;
    });

    prevButtons[index].addEventListener('click', () => {
      container.scrollLeft -= containerWidth;
    });
  });
}
