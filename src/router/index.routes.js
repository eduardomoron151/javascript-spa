import { paginas } from "../controller/index";


const router = async(route) => {
    let content = document.getElementById('root');
    content.innerHTML = "";

    switch (route) {
    
        case "#/": {
            return content.appendChild(paginas.calculadora())
        }

        case "#/cambio": {
            return content.appendChild(paginas.tipoCambio())
        }
        default:
            break;
    }

}


export { router };