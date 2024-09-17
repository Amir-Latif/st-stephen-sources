const topBtn = document.querySelector(".top-btn");

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (window.scrollY > 200) {
    topBtn.classList.remove("opacity-0", "invisible");
    topBtn.classList.add("opacity-100", "visible");
  } else {
    topBtn.classList.remove("opacity-100", "visible");
    topBtn.classList.add("opacity-0", "invisible");
  }
};

// Scroll to top when the button is clicked
topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
