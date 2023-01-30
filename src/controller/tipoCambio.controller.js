import view from '../view/tipoCambio.html';

export default() => {

    const div = document.createElement('div');
    div.setAttribute('class','calculadora');
    div.innerHTML = view;


    return div;
}