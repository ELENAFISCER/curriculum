function mostrarSeccion(seccion) {
  var secciones = document.querySelectorAll('.contenido section');
  secciones.forEach(function(seccionActual) {
    if (seccionActual.classList.contains(seccion)) {
      seccionActual.classList.add('mostrando');
    } else {
      seccionActual.classList.remove('mostrando');
    }
  });
}
function enviarCorreo() {
  var email = 'elena.a.fiscer@gmail.com';
  window.location.href = 'mailto:' + email;
}

function irAInstagram() {
  var usuario = 'jelenfis'; // Reemplaza con tu nombre de usuario de Instagram
  window.location.href = 'https://www.instagram.com/' + usuario;
}
document.querySelectorAll('.printbutton').forEach(function(element) {
  element.addEventListener('click', function() {
      print();
  });
});

function mostrarSeccion(id) {
  // Oculta todas las secciones
  let secciones = document.querySelectorAll('section');
  secciones.forEach(function(seccion) {
      seccion.style.display = 'none';
  });

  // Muestra la sección con el ID dado
  let seccionAMostrar = document.getElementById(id);
  seccionAMostrar.style.display = 'block';
}
window.onload = function() {
  mostrarSeccion('objetivo');
};
function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Alternar la clase 'active' en el menú
}


function imprimir() {
   let secciones = document.querySelectorAll('section')
   secciones.forEach(seccion=> seccion.style.display='block')

  window.print();
}







