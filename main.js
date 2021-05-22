document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist:-150,
        shift:5,
        padding:5,
        numVisible:3,
        indicators: true,
        
    })
});



var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

function iniciarMap(){
    var coord = {lat:-33.0310088 ,lng: -71.5386332};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        
        email: {
          required: true,
          email: true
        },
        telefono: {
          required: true,
          number: true,
          min: 9

        }
      },


        
      messages : {
        name: {
          minlength: "El nombre debe tener almenos 3 caracteres"
        },
        telefono: {
          required: "Por favor ingrese su telefono",
          number: "Please enter your age as a numerical value",
          min: "You must be at least 18 years old"
        },
        email: {
          email: "The email should be in the format: abc@domain.tld"
        }
        
      }
    });
  });

  function hacer_click() {
    alert("ME haz dado click")
  }

  const button = document.getElementById('button')

  button.addEventListener('mouseenter', ()=> {
    button.classList.add('black')
  })

  button.addEventListener('mouseenter', ()=> {
    button.classList.remove('black')
    button.classList.add('white')
  })

  




