document.addEventListener('DOMContentLoaded', () => {
  const msg = { texto: '¡downtoup!' };

  fetch('/connex', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  })
    .then(response => {response.ok?response.json():JSON.stringify(0)})
    .then(data => {
      console.log('Respuesta del servidor:', data.mensaje);
    })
    .catch(error => console.error('Error al enviar el texto:', error));
});