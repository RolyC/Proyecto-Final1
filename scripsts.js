window.addEventListener('load', function(){
    new Glider(document.querySelector('.teniss__lista'),{
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: '.tenniss__indicadores',
        arrows: {
        prev: '.teniss__anterior',
        next: '.teniss__siguiente'
        }
    });
        
    
});
