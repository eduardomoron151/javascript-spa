import { paginas } from "../controller/index";


const router = async(route) => {
    let content = document.getElementById('root');
    content.innerHTML = "";

    switch (route) {
    
        case "#/": {
            return content.appendChild(paginas.calculadora())
        }

        case "#/cambio": {
            return content.innerHTML = '<h1>Calculadora</h1>'
        }
        default:
            break;
    }

}


export { router };