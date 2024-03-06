// Add this to your existing script or in a separate script file
$(document).ready(function () {
 

  // Handle click events on recipe items
  $(".item").click(function () {
    event.preventDefault(); 

    var title = $(this).find("h5").text();
    var imageSrc = $(this).find("img").attr("src");
    var description = $(this).find("p").text();
    var ingredientes=$(this).find("#ingredientes").html();
    var pasos=$(this).find("#pasos").html();
    console.log(pasos);
  

    // Update modal content
    $("#recipeTitle").text(title);
    $("#recipeImage").attr("src", imageSrc);
    $("#recipeDescription").text(description);
    $("#recipeIngredientes").html(ingredientes);
    $("#recipePasos").html(pasos);

    // Display the modal
    $("#recipeModal").css("display", "block");

    // Trigger the fadeIn animation by adding the 'show' class
    $("#recipeModal .modal-content").addClass("show");
  });

  // Handle close button in the modal
  $(".close").click(function () {
    // Remove the 'show' class to trigger fade-out animation
    $("#recipeModal .modal-content").removeClass("show");

    // Hide the modal after the animation duration (0.5s)
    setTimeout(function () {
      $("#recipeModal").css("display", "none");
    }, 500);
  });

  // Close modal if clicked outside the content
  $(window).click(function (event) {
    if (event.target.id === "recipeModal") {
      // Remove the 'show' class to trigger fade-out animation
      $("#recipeModal .modal-content").removeClass("show");

      // Hide the modal after the animation duration (0.5s)
      setTimeout(function () {
        $("#recipeModal").css("display", "none");
      }, 500);
    }
  });
});
const contenedor = document.querySelector('#informacion');
const tooltip = document.createElement('div');
text=['Fotografia por Gente Despierta de Casa Dani RNE en rtve https://www.rtve.es/television/20220214/tortilla-patata-agria-cebolla-dulce-huevos-camperos/2290300.shtml']
tooltip.id = 'tooltip';
tooltip.textContent = text[0];
contenedor.appendChild(tooltip);

contenedor.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
});

contenedor.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});