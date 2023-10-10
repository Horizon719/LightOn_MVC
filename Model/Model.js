
class Model{
    #allapot;
    #allapotLista = [];
    constructor(){
        this.#allapot = false;
        this.#allapotLista = ["","","","","","","","",""];
        this.rndAllapotlista();
    }

    setAllapot(index){
        switch (index) {
            case 2:
                this.#allapotLista[index-3] = !this.#allapotLista[index-3];
                this.#allapotLista[index-1] = !this.#allapotLista[index-1];
                this.#allapotLista[index] = !this.#allapotLista[index];
                this.#allapotLista[index+3] = !this.#allapotLista[index+3];
                break;
            case 3:
                this.#allapotLista[index-3] = !this.#allapotLista[index-3];
                this.#allapotLista[index+1] = !this.#allapotLista[index+1];
                this.#allapotLista[index] = !this.#allapotLista[index];
                this.#allapotLista[index+3] = !this.#allapotLista[index+3];
                break;
            case 5:
                this.#allapotLista[index-3] = !this.#allapotLista[index-3];
                this.#allapotLista[index-1] = !this.#allapotLista[index-1];
                this.#allapotLista[index] = !this.#allapotLista[index];
                this.#allapotLista[index+3] = !this.#allapotLista[index+3];
                break;
            case 6:
                this.#allapotLista[index-3] = !this.#allapotLista[index-3];
                this.#allapotLista[index+1] = !this.#allapotLista[index+1];
                this.#allapotLista[index] = !this.#allapotLista[index];
                this.#allapotLista[index+3] = !this.#allapotLista[index+3];
                break;
            default:
                this.#allapotLista[index-3] = !this.#allapotLista[index-3];
                this.#allapotLista[index-1] = !this.#allapotLista[index-1];
                this.#allapotLista[index] = !this.#allapotLista[index];
                this.#allapotLista[index+1] = !this.#allapotLista[index+1];
                this.#allapotLista[index+3] = !this.#allapotLista[index+3];
                break;
        }
    }

    getAllapot(){
        return this.#allapot;
    }

    getAllapotLista(){
        return this.#allapotLista;
    }

    rndAllapotlista(){
        for (let i = 0; i < this.#allapotLista.length; i++) {
            if (Math.floor(Math.random() * 11) > 2) {
                this.#allapotLista[i] = false;
            } else {
                this.#allapotLista[i] = true;
            }
        }
    }

} export default Model