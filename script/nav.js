window.addEventListener('DOMContentLoaded', function () {
    const navbarItems = document.querySelectorAll('.navbar li a');
  
    navbarItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Desactivar el elemento activo
        const activeItem = document.querySelector('.navbar li a.home-active');
        activeItem.classList.remove('home-active');
  
        // Activar el elemento seleccionado
        this.classList.add('home-active');
  
        // Obtener el ID del marcador desde el atributo href del elemento <a>
        const target = this.getAttribute('href');
  
        // Desplazarse suavemente hacia el marcador
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });