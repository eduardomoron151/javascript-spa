import view from '../view/calculadora.html';

export default() => {

    const div = document.createElement('div');
    div.setAttribute('class','calculadora');
    div.innerHTML = view;

    // constantes
    const preview = div.querySelector('#resultado');
    const listaHistorial = div.querySelector('.lista-historial');

    let mostrarHistorial = false;
    let historial = [];

    // evento para los numeros y operaciones
    div.addEventListener('click', (e) => {

        if(e.target.matches('.numero') || e.target.matches('.operaciones') || e.target.matches('.decimal')) {
            preview.innerText += e.target.innerText;
        }

        if(e.target.matches('.calcular')) {
            listaHistorial.innerHTML = '';

            historial.push(preview.innerText);

            preview.innerText = eval(preview.innerText);

            historial.push(preview.innerText);

            if(historial.length > 6) {

                historial.splice(0,2);
            }
            
            historial.forEach(historia => {
                const li = document.createElement('li');
                li.innerText = historia;
                listaHistorial.appendChild(li);
            });
        }

        if(e.target.matches('.C')) {
            preview.innerText = '';
        }

        if(e.target.matches('.DEL')) {
            preview.innerText = preview.innerText.substring(0, preview.innerText.length -1 )
        }

        if(e.target.matches('.historial')) {

            mostrarHistorial = !mostrarHistorial;

            if(mostrarHistorial) {
                listaHistorial.style.display = 'block';
            } else {
                listaHistorial.style.display = 'none';
            }

        }

    })

    return div;
}