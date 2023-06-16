document.addEventListener('DOMContentLoaded', function() {
  // Obtén una referencia a todos los botones .btn-card
  const btnCards = document.querySelectorAll('.btn-card');

  // Obtén una referencia al formulario
  const form = document.getElementById('formulario');

  // Agrega el evento de clic a cada botón .btn-card
  btnCards.forEach(function(btnCard) {
    btnCard.addEventListener('click', function() {
      // Obtén el valor del asunto desde el atributo de datos 'data-asunto'
      const asunto = btnCard.getAttribute('data-asunto');

      // Desplázate al formulario
      form.scrollIntoView({ behavior: 'smooth' });

      // Asigna el valor del asunto al campo de asunto del formulario
      const asuntoInput = document.querySelector('#asunto');
      asuntoInput.value = asunto;
    });
  });
  
  var enviarButton = document.getElementById('enviar');
  const numeroWhatsApp = '+5492314617633'; 

  enviarButton.addEventListener('click', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validación de campos vacíos y sin números en nombre y apellido
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      correo.trim() === '' ||
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
    'Te escribo para ' + asunto.value + '\n' + mensaje + "." + " " + "Mi e-amail de contacto es:" + " " + correo;
    var enlaceWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(mensajeWhatsApp);
    window.open(enlaceWhatsApp);

    mostrarAviso('Mensaje enviado por WhatsApp');
  });

  var whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.addEventListener('click', function() {
    var mensajeWhatsAppBot = '¡Hola! Gracias por comunicarte con Inmobiliaria Alzua! ¿En qué podemos ayudarte?';
    enlaceWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(mensajeWhatsAppBot);
    window.open(enlaceWhatsApp, '_blank');

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