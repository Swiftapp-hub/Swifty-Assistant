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