// =======================================
// 凌雲工務店 JavaScript
// =======================================

// スクロール時にふわっと表示
const fadeElements = document.querySelectorAll(
".service-card, .menu-card, .work-card, .about, .company, .contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");
entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

fadeElements.forEach(el=>observer.observe(el));


// =======================================
// スムーズスクロール
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// =======================================
// 電話ボタンを少し動かす
// =======================================

const buttons=document.querySelectorAll(".btn,.cta-button,.tel-button");

buttons.forEach(button=>{

button.addEventListener("touchstart",()=>{

button.style.transform="scale(.96)";

});

button.addEventListener("touchend",()=>{

button.style.transform="scale(1)";

});

});


// =======================================
// ヘッダー背景変更
// =======================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#ffffff";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.background="#ffffff";

header.style.boxShadow="0 3px 10px rgba(0,0,0,.08)";

}

});


// =======================================
// 読み込み完了
// =======================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});