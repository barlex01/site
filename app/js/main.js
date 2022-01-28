
//                *=======-slider-=======*



$(function() {
    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    })

        let arrows = document.querySelectorAll('.carousel button');

        for (let arrow of arrows) {
            arrow.innerHTML = '';
        }

})


