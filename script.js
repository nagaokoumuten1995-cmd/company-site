document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".site-header");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    // 初回読み込み時
    updateHeader();

    // スクロール時
    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

});