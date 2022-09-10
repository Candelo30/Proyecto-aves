AOS.init();

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.scroll').fadeIn(); 
        } else { 
            $('.scroll').fadeOut(); 
        } 
    }); 
    $('.scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
	
	var menuBtn = $('.menu-icon'),
		menu = $('.menu');
	

	
	menuBtn.click(function(){
		
		if (menu.hasClass('show')){
			menu.removeClass('show');
		}else {
			menu.addClass('show');
		}
		
		
	});
	
	
});

	

const Btndarkmode = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const button = document.querySelector('button');



load();

Btndarkmode.addEventListener('click', e=> {
	body.classList.toggle('dark');
	Btndarkmode.classList.toggle('active');
	store(body.classList.contains('dark'));
	store(button.classList.contains('active'));
});


	
function load() {
	const dark = localStorage.getItem('dark');
	if(!dark){
		store('false')	   
	}else if(dark == 'true') {
		body.classList.add('dark')
		button.classList.add('active')
	}
		
	}
function store(value) {
	localStorage.setItem('dark', value);
	localStorage.setItem('active', value);
	
}