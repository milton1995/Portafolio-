//icono de alternar barra de navegación
let menuIcono = document.querySelector('#menu-icono');
let navegador = document.querySelector('.navegador');

menuIcono.onclick = () => {
    menuIcono.classList.toggle('bx-x');
    navegador.classList.toggle('activo');
}

//sección de desplazamiento
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //activar link navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //Secciones activas para animación al desplazarse
            sec.classList.add('show-animado');
        }
        //Si desea utilizar una animación que se repita al desplazarse, utilice esto.
        else {
            sec.classList.remove('show-animado');
        }
    });


    //encabezado fijo
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    //Eliminar el icono de alternancia y la barra de navegación al hacer clic en los enlaces de la barra de navegación (desplazarse)
    menuIcono.classList.remove('bx-x');
    navegador.classList.remove('activo');

    //animacion de footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animado', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}