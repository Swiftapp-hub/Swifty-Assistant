const btn_github = document.getElementById("btn_github");
const btn_contact = document.getElementById("btn_contact");
const btn_github_project = document.getElementById("btn_github_project");
const btn_download = document.getElementById("btn_download");

const logo = document.getElementById("logo");
const img_logo = document.getElementsByClassName("icon_swifty");
const h1 = document.querySelector(".content_page h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");

const loader = document.querySelector(".bg_loader");
const body = document.body;

btn_github.onclick = function () {
    open('https://github.com/Swiftapp-hub');
}

btn_contact.onclick = function () {
    location.href = "mailto:swiftyassistant.io@gmail.com";
}

btn_github_project.onclick = function () {
    location.href = "https://github.com/Swiftapp-hub/Swifty-Assistant";
}

btn_download.onclick = function () {
    location.href = "https://github.com/Swiftapp-hub/Swifty-Assistant/releases/download/v1.0.0-alpha3/SwiftyAssistant-OnLine-Installer.run"
}

window.onscroll = function() {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("nav_bar").style.background = "#050505";
        document.getElementById("nav_bar").style.boxShadow = "0px 5px 15px 0px rgba(7, 7, 7, 0.7)";
    }
    else {
        document.getElementById("nav_bar").style.background = "rgba(10, 10, 10, 0.700)";
        document.getElementById("nav_bar").style.boxShadow = "0px 0px 0px 0px rgba(7, 7, 7, 0.534)";
    }
}

window.onload = function(){
    loader.classList.add('fondu-out');
    body.removeChild(loader);

    const anim = gsap.timeline({paused: true});

    anim
    .from(logo, {duration: 2, x: -150, opacity: 0, ease: "power2.out"}, 0.1)
    .from(img_logo, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 0.4)
    .from(h1, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 0.8)
    .from(h2, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 1.2)
    .from(h3, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 1.6)
    .from(btn_github, {duration: 1.5, y: -200, opacity: 0, ease: "power2.out"}, 0.1)
    .from(btn_contact, {duration: 1.5, y: -200, opacity: 0, ease: "power2.out"}, 0.5)
    .from(btn_download, {duration: 2, x: -300, opacity: 0, ease: "power2.out"}, 0.6)
    .from(btn_github_project, {duration: 2, x: 300, opacity: 0, ease: "power2.out"}, 1);

    anim.play();
}