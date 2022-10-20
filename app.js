window.addEventListener('load', function () {
    new Glider(this.document.querySelector('.carousel__list'), {
        slidesToShow: 5,
        dots: '.carousel__indicators',
        arrows: {
            prev: '.left-arrow',
            next: '.right-arrow'
        }
    });
    new Glider(this.document.querySelector('.carousel__marks__list'), {
        slidesToShow: 4,
        dots: '.carousel__marks__indicators'
    });
    new Glider(this.document.querySelector('.carousel__marks__list2'), {
        slidesToShow: 4,
        dots: '.carousel__marks__indicators2'
    });
})