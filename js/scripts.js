
pictureCnt[ i ].addEventListener( 'mouseover', function() {
	var nameBox = this.querySelector( ".picture-cnt-description" );
	nameBox.style.top = "-70px";
} );

pictureCnt[ i ].addEventListener( 'mouseleave', function() {
	var nameBox = this.querySelector( ".picture-cnt-description" );
	nameBox.style.top = "120px";
} );
    // zad.2
    var pictureCnt = document.querySelectorAll( ".picture-cnt:not(.active)" );
    for( var i = 0; i < pictureCnt.length; i++ ) {


var prevSlide = function() {
	//robie petle po slide, wylaczajac im klase active
	for (var i=0; i<slides.length; i++) {
		slides[i].classList.remove('active');
	}
	currentSlide--;
}

var firstLi = document.querySelector( ".main-nav li " );
var fade = document.querySelector( ".main-nav .submenu" );
firstLi.addEventListener( 'mouseover', function() {
	fade.style.top = "55px";
} )
firstLi.addEventListener( 'mouseleave', function() {
	fade.style.top = "-140px";
	fade.style.transition = "0.5 top";
} )


var nextSlide = function() {
	console.log('next')
	//robie petle po slide, wylaczajac im klase active
	for (var i=0; i<slides.length; i++) {
		slides[i].classList.remove('active');
	}

	//zwiekszam licznik
	currentSlide++;
    // zad.1
    var firstLi = document.querySelector( ".main-nav li " );
    var fade = document.querySelector( ".main-nav .submenu" );
    firstLi.addEventListener( 'mouseover', function() {
        fade.style.top = "55px";
    } );
    firstLi.addEventListener( 'mouseleave', function() {
        fade.style.top = "-140px";
        fade.style.transition = "0.5 top";
    } );

    // zad.3
    function fadeSlideFun() {
        var fadeSlide = document.querySelectorAll( ".section-slider .slide" );
        for( var i = 0; i < fadeSlide.length; i++ ) {
            fadeSlide[ i ].classList.toggle( 'active' );
        }
    }

    var leftButton = document.querySelector( ".section-slider .left" );
    leftButton.addEventListener( 'click', fadeSlideFun );

    var rightButton = document.querySelector( ".section-slider .right" );
    rightButton.addEventListener( 'click', fadeSlideFun );

	//jezeli licznik jest wiekszy od indeksu ostatniego slide
	//wracamy do poczatku (by dzialalo w petli)
	if (currentSlide > slides.length-1) {
		currentSlide = 0;
	}
	//dodaje odpowiedniemu slideowi klase active
	slides[currentSlide].classList.add('active');

	//czyszcze timeout by po recznym kliknieciu zaczac
	//odmiezac czas od poczatku (jezeli tego nie zrobie, to czlowiek
	//kliknie na next, a np w tym samym czasie poleci setTimeout ktory
	//stwierdzi, ze wlasnie przyszla pora sie odpalic
	clearTimeout(timer);
	timeoutNextSlide();
};

//odpalam timer do automatycznego przelaczania slidow
timeoutNextSlide();

//...i oczywiscie podpinam eventy pod strzalki
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);


//========================================
//main 3 boxes
//========================================
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var boxes = document.querySelectorAll('.picture-cnt');
		var markBox = function(e) {
			e.preventDefault();

			for (var i=0; i<boxes.length; i++) {
				boxes[i].classList.remove('active');
			}
			//e.target = klikniety element - tutaj obrazek w linku
			//e.currentTarget = element, ktory wywolal event - czyli .box - nasz link
			e.currentTarget.classList.add('active');
		};

		for (var i=0; i<boxes.length; i++) {
			boxes[i].addEventListener('click', markBox)
		}
	});
})();

// var nameBox = document.querySelectorAll( ".picture-cnt-description" );
var pictureCnt = document.querySelectorAll( ".picture-cnt:not(.active)" );
for( var i = 0; i < pictureCnt.length; i++ ) {

	pictureCnt[i].addEventListener( 'mouseover', function() {
		var nameBox = this.querySelector(".picture-cnt-description");
		nameBox.style.top = "-70px";
	} );

	pictureCnt[i].addEventListener('mouseleave', function(){
		var nameBox = this.querySelector(".picture-cnt-description");
		nameBox.style.top = "120px";
	})
}
