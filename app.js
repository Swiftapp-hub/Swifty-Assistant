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

const btn_github = window.document.getElementById("btn_github");
const btn_contact = window.document.getElementById("btn_contact");

btn_github.onclick = function(){
    window.open('https://github.com/Swiftapp-hub');
}

btn_contact.onclick = function(){
    window.location.href = "mailto:swiftyassistant.io@gmail.com";
}