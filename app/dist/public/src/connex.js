document.addEventListener('DOMContentLoaded', () => {
  fetch('/connex')
    .then(response => response.json())
    .then(data => {
      console.log('Texto desde el servidor:', data.texto);
    })
    .catch(error => console.error('Error al obtener el texto:', error));
});