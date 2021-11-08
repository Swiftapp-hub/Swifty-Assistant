var particles = Particles.init({
    selector: '.background',
    color: '#88C8FF',
    maxParticles: 680,
    connectParticles: true,

    responsive: [
        {
            breakpoint: 2200,
            options: {
                maxParticles: 480
            }
        },
        {
            breakpoint: 1850,
            options: {
                maxParticles: 380
            }
        },
        {
            breakpoint: 1600,
            options: {
                maxParticles: 280
            }
        },
        {
            breakpoint: 1300,
            options: {
                maxParticles: 190
            }
        },
        {
            breakpoint: 1100,
            options: {
                maxParticles: 140
            }
        },
        {
            breakpoint: 900,
            options: {
                maxParticles: 100
            }
        },
    ]
});

const btn_github = document.getElementById("btn_github");
const btn_contact = document.getElementById("btn_contact");
const btn_github_project = document.getElementById("btn_github_project");
const btn_download = document.getElementById("btn_download");

const logo = document.getElementById("logo");
const img_logo = document.getElementsByClassName("icon_swifty");
const h1 = document.querySelector(".content_page h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");

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

window.onload = function(){
    const anim = gsap.timeline({paused: true});

    anim
    .from(logo, {duration: 2, x: -150, opacity: 0, ease: "power2.out"})
    .from(img_logo, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 0.4)
    .from(h1, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 0.8)
    .from(h2, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 1.2)
    .from(h3, {duration: 1, y: -20, opacity: 0, ease: "power2.out"}, 1.6)
    .from(btn_github, {duration: 1.5, y: -200, opacity: 0, ease: "power2.out"}, 0)
    .from(btn_contact, {duration: 1.5, y: -200, opacity: 0, ease: "power2.out"}, 0.5)
    .from(btn_download, {duration: 2, x: -300, opacity: 0, ease: "power2.out"}, 0.6)
    .from(btn_github_project, {duration: 2, x: 300, opacity: 0, ease: "power2.out"}, 1);

    anim.play();
}