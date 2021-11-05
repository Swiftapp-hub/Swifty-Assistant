var particles = Particles.init({
    selector: '.background',
    color: '#88C8FF',
    maxParticles: 700,
    connectParticles: true,

    responsive: [
        {
            breakpoint: 2200,
            options: {
                maxParticles: 500
            }
        },
        {
            breakpoint: 1850,
            options: {
                maxParticles: 400
            }
        },
        {
            breakpoint: 1600,
            options: {
                maxParticles: 300
            }
        },
        {
            breakpoint: 1300,
            options: {
                maxParticles: 200
            }
        },
        {
            breakpoint: 1100,
            options: {
                maxParticles: 150
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