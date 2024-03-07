
$(document).ready(function () {


  //cuando clicamos en una receta
  $(".item").click(function () {
    event.preventDefault();
    var title = $(this).find("h5").clone();
    title.find("span").remove();
    var tit = title.text();
    var imageSrc = $(this).find("img").attr("src");
    var description = $(this).find("p").text();
    var ingredientes = $(this).find("#ingredientes").html();
    var pasos = $(this).find("#pasos").html();
    var url = $(this).find("#url").html();
    console.log(pasos);


    // actualizamos el modal con la informcaion que apsamos de al receta
    $("#recipeTitle").text(tit);
    $("#recipeImage").attr("src", imageSrc);
    $("#recipeDescription").text(description);
    $("#recipeIngredientes").html(ingredientes);
    $("#recipePasos").html(pasos);

    //mostrar url derechos img
    $("#recipeImage").mouseover(function () {
      $("#urld").remove();
      // Agregar un div al footer
      $("footer").append(`<div id="urld">${url}</div>`);
    });

    // Evento de mouseout en el body
    $("#recipeImage").mouseout(function () {
      // Eliminar el div del footer
      $("#urld").remove();
    });

    //mosterat derechos ingredientes
    $("#recipeIngredientes").mouseover(function () {
      $("#ing").remove();
      // Agregar un div al footer
      $("footer").append('<div id="ing">Fotografia de Елена https://pin.it/1aKYbvqJa </div>');
    });

    // Evento de mouseout en el body
    $("#recipeIngredientes").mouseout(function () {
      // Eliminar el div del footer
      $("#ing").remove();
    });

    //mostrar derechos descripcion
    $("#recipePasos").mouseover(function () {
      $("#des").remove();
      // Agregar un div al footer
      $("footer").append('<div id="des">Fotografia de katerynadi https://previews.123rf.com/images/katerynadi/katerynadi1702/katerynadi170200017/71869451-vieja-textura-de-madera-marr%C3%B3n-de-los-tablones-vector-de-fondo-de-madera-%C3%BAselo-para-su-dise%C3%B1o.jpg</div>');
    });

    // Evento de mouseout en el body
    $("#recipePasos").mouseout(function () {
      // Eliminar el div del footer
      $("#des").remove();
    });


    // mostramos el modal
    $("#recipeModal").css("display", "block");


    $("#recipeModal .modal-content").addClass("show");
  });

  //cerrar modal 
  $(".close").click(function () {

    $("#recipeModal .modal-content").removeClass("show");


    setTimeout(function () {
      $("#recipeModal").css("display", "none");
    }, 500);
  });

  // cerrar modal si clicamos fuera
  $(window).click(function (event) {
    if (event.target.id === "recipeModal") {
      // Remove the 'show' class to trigger fade-out animation
      $("#recipeModal .modal-content").removeClass("show");

      setTimeout(function () {
        $("#recipeModal").css("display", "none");
      }, 500);
    }
  });
});

const contenedores = document.querySelectorAll('.item'); // Selecciona todos los elementos
//mostrar licencias
contenedores.forEach((item, index) => {
  const tooltip = document.createElement('div');
  const textos = [
    'Fotografia por Gemma Bartgues en bonviveur.es https://www.bonviveur.es/recetas/aguacates-rellenos-de-atun ',
    'Fotografía por Gente Despierta de Casa Dani RNE en RTVE https://www.rtve.es/television/20220214/tortilla-patata-agria-cebolla-dulce-huevos-camperos/2290300.shtml',
    'Fotografia por Una Bruja en la Cocina Blog https://unabrujaenlacocinablog.wordpress.com/2018/02/28/canelones-de-pato-manzana-y-foie-juego-de-blogueros-2-0/',
    'Fotografia por María Ángeles Fernández en bonviveur.es https://www.bonviveur.es/recetas/flores-de-carnaval ',
    'Fotografia por Manuel Galarreta en Cocinatis https://www.cocinatis.com/receta/tarta-lotus.html'

  ];

  tooltip.id = 'tooltip';
  tooltip.textContent = textos[index]; // Usa el índice para obtener el texto correspondiente

  $("footer").append(tooltip);


  item.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });



});