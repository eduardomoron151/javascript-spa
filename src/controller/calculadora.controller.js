import view from '../view/calculadora.html';

export default() => {

    const div = document.createElement('div');
    div.setAttribute('class','calculadora');
    div.innerHTML = view;

    // constantes
    const preview = div.querySelector('#resultado');

    // evento para los numeros y operaciones
    div.addEventListener('click', (e) => {

        if(e.target.matches('.numero') || e.target.matches('.operaciones') || e.target.matches('.decimal')) {
            preview.innerText += e.target.innerText;
        }

        if(e.target.matches('.calcular')) {
            preview.innerText = eval(preview.innerText);
        }

        if(e.target.matches('.C')) {
            preview.innerText = '';
        }

        if(e.target.matches('.DEL')) {
            preview.innerText = preview.innerText.substring(0, preview.innerText.length -1 )
        }

        if(e.target.matches('.porcentaje')) {
            preview.innerText = `${(parseInt(preview.innerText) / 100)} %` ;
        }

    })

    return div;
}