
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
let body = document.querySelector('.body-1');
let modal = document.querySelector('.modal');
let btn = document.querySelector('.works');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.toggle('opacity')
    body.classList.toggle('hiden')
})
modal.addEventListener('click', (e)=> {
    console.log(e)
    if(e.target.classList.contains('opacity')) {
        modal.classList.toggle('opacity');
        body.classList.toggle('hiden')
    }
})

