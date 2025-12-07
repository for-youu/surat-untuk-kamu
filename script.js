document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Animasi Particles JS
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, // Jumlah partikel
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // Warna partikel (putih)
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                }
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Efek saat mouse mendekat
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Efek saat diklik
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // 2. Logika Navigasi Slide
    const slideWrapper = document.getElementById('slideWrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Fungsi untuk memperbarui tampilan slide
    function updateSlide() {
        // Pindahkan slide wrapper secara horizontal (transform: translateX)
        slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Perbarui status tombol
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    // Event listener untuk tombol 'Selanjutnya'
    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    });

    // Event listener untuk tombol 'Sebelumnya'
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    });

    // Inisialisasi tampilan awal
    updateSlide(); 
});
