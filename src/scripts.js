/**
 * HEADER
 */
window.addEventListener("scroll", () => {
    if (scrollY > 100) {
        document.querySelector("[data-header]").classList.add("active");
    } else {
        document.querySelector("[data-header]").classList.remove("active");
    };
});