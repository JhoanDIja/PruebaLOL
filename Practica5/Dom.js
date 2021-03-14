const contenedor = document.createElement("div");
var img = new Image();
var titulo = document.createElement("h1");
var parrafo = document.createElement("p");
var boton = document.createElement("button");

//propiedades imagen
img.style.width = "250px"
img.style.marginLeft = "30px";
img.style.marginRight = "30px";
img.style.marginTop = "40px";

// propiedades contenedor
contenedor.style.textAlign = "center"
contenedor.style.backgroundColor = "lightgray"
contenedor.style.width = "400px"
contenedor.style.height = "500px"
contenedor.style.margin = "0 auto"
//propiedades parrafo
parrafo.style.textAlign = "left";
parrafo.style.margin = "9px"

//propiedades titulo
titulo.style.fontSize = "24px";
titulo.style.marginLeft="5px";
titulo.style.marginRight="5px";

//propiedades boton
boton.style.marginTop="9px";
boton.style.fontSize = "20px";
boton.style.fontWeight = "bold"
boton.style.color = "white"
boton.style.border = "none"
boton.style.padding = "10px 24px";
boton.style.borderRadius= "8px";
boton.style.backgroundColor = "red";

//para ponerlo todo en el html(que se vea)
contenedor.appendChild(img);
contenedor.appendChild(titulo);
contenedor.appendChild(parrafo);
contenedor.appendChild(boton);

img.src = "imagen clipart.jpg";
titulo.innerHTML = "Como añadir un efecto a una imagen";
parrafo.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imagenes cuando se les pasa el curor por encima. todos esos plugins añaden un monton de codigo a la pagin, que terminan afectando a la velocidad de la web en si. Si quieres utilizar muy poco codigo para asi optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti";
boton.innerHTML = "Leer mas";
document.body.appendChild(contenedor);

//hover intento lol

$(document).ready(function(){
    $(boton).hover(function(){
      $(this).css("background-color", "gray");
      }, function(){
      $(this).css("background-color", "red");
    });
  });