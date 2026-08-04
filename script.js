document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".site-header");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    // 初回実行
    updateHeader();

    // スクロール時
    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

});