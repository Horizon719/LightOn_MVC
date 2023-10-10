
class Model{
    #allapot;
    #allapotLista = [];
    constructor(){
        this.#allapot = false;
        this.#allapotLista = ["","","","","","","","",""];
        this.rndAllapotlista();
    }

    setAllapot(index){
        this.#allapotLista[index] = !this.#allapotLista[index];
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