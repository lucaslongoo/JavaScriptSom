    function tocaSomPom () {
        document.querySelector('#som_tecla_tom').play();
    }

const ListaDeTeclas = document.querySelector('.tecla');

ListaDeTeclas[0].onclick = tocaSomPom;