document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".site-header");
    const floatingLogo = document.querySelector(".floating-logo");

    function toggleHeader() {

        if (window.scrollY > 80) {

            header.classList.add("hide");
            floatingLogo.classList.add("show");

        } else {

            header.classList.remove("hide");
            floatingLogo.classList.remove("show");

        }

    }

    // 初回表示
    toggleHeader();

    // スクロール時
    window.addEventListener("scroll", toggleHeader, {
        passive: true
    });

});