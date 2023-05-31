document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var enviarButton = document.getElementById('enviar');

  enviarButton.addEventListener('click', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validación de campos vacíos y sin números en nombre y apellido
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      correo.trim() === '' ||
      asunto.trim() === '' ||
      mensaje.trim() === ''
    ) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    if (/\d/.test(nombre) || /\d/.test(apellido)) {
      alert('El nombre y el apellido no pueden contener números.');
      return;
    }

    // Crea el mensaje para enviar por WhatsApp
    var mensajeWhatsApp = 'Mi nombre es ' + nombre + " " + apellido +'\n' +
    'Te escribo por ' + asunto + '\n' +
    mensaje;

    var numeroWhatsApp = '+5492314410936'; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje

    var enlaceWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(mensajeWhatsApp);
    window.open(enlaceWhatsApp);

    mostrarAviso('Mensaje enviado por WhatsApp');
  });

  var whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.addEventListener('click', function() {
    var numeroEmpresa = '+5492314410936'; // Reemplaza con el número de WhatsApp de la empresa
    var mensajeWhatsApp = '¡Hola! Gracias por comunicarte con Inmobiliaria Alzua! ¿En qué podemos ayudarte?';
    var urlWhatsApp = 'https://wa.me/' + numeroEmpresa + '?text=' + encodeURIComponent(mensajeWhatsApp);
    window.open(urlWhatsApp, '_blank');

    mostrarAviso('Iniciando chat de WhatsApp');
  });

  function mostrarAviso(mensaje) {
    var aviso = document.createElement('div');
    aviso.className = 'aviso';
    aviso.textContent = mensaje;
    document.body.appendChild(aviso);

    setTimeout(function() {
      document.body.removeChild(aviso);
    }, 3000);
  }
});