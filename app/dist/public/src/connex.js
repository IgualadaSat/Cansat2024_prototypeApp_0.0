document.addEventListener('DOMContentLoaded', () => {
  const msg = { texto: '¡downtoup!' };

  fetch('/connex', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg)
  })
    .then(response => {
      let r = response.json().then(texto => {console.log("server: ",texto.mensaje)})
    })
    .catch(error => console.error('Error al enviar el texto:', error));
});