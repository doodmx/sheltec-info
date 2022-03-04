

async function addAnimation(btn){

    btn.classList.toggle("is-active");

}




function addEventListeners(){
    var burgers = document.getElementsByClassName("hamburger");
    for (let i = 0; i < burgers.length; i++) {
        // colors[i].addEventListener("click", updateColorStatus());
        if(!(burgers[i].classList.contains("is-active"))){
            burgers[i].addEventListener("click", function (){
                addAnimation(burgers[i]);
                console.log("Añadida")
            })
        }
        
    };
	var testimonialBtns = document.getElementsByClassName("btn-testimonial");
	for (let i = 0; i < testimonialBtns.length; i++) {
		testimonialBtns[i].addEventListener("click", function (){
			updateVisibleTestimonials();
			console.log("Testimonials updated")
		})	
	};
	var productTables = document.getElementsByClassName("link_cards_productos");
	for(let i = 0; i < productTables.length; i++){
		productTables[i].addEventListener("click", function(e){
			e.preventDefault();
			showProductCategories(productTables[i].id);
			$('html,body').animate({
				scrollTop: $("#section_low").offset().top-100},
				'fast');
			console.log("Category updated "+ productTables[i].id+ " received")
		})
	}
}


// Testimonials carrousel
const slider = document.querySelector(".testimonials");
		const slides = document.querySelectorAll(".testimonial");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}		
//End of testimonials carrousel

async function updateVisibleTestimonials(){
	//Hide other cards on mobile
	for (let j = 0; j < slides.length; j++) {
		if (!(slides[j].classList.contains("active"))){
			slides[j].classList.add("mobile_hide")
		}else{
			slides[j].classList.remove("mobile_hide")	
		}
	}
}

function showProductCategories(receivedID) {
    var x = document.getElementsByClassName('table_product-category');
	for(let j=0; j<x.length; j++){
		if((x[j].id+'_btn')!=receivedID){
			x[j].style.display=='none!important';
			x[j].classList.add('hide')
			
		}else{
			x[j].style.display=='block';
			x[j].classList.remove('hide')
		}
	}
    // if (x.style.display == 'none') {
    //     x.style.display = 'block';
    // } else {
    //     x.style.display = 'none';
    // }
}



addEventListeners();
