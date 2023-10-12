import Model from "../Model/Model.js"
import JatekTerView from "../View/JatekTerView.js";

class Controller{
    #lista
    #meret
    constructor(){
        this.#meret = 3;
        $(":root").css(`--meret`, `${this.#meret}`);
        $(".jatekter").css(`width`, `calc(var(--meret)*107px)`);
        const self = this;
        const MODEL = new Model(this.#meret);
        this.#lista = MODEL.getAllapotLista();
        new JatekTerView($(".jatekter"), this.#meret, this.#lista);
    
        $(window).on("kattintas", function(event){
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.szinBeallit(MODEL.getAllapotLista()[event.detail.getIndex()]);
            new JatekTerView($(".jatekter"), self.#meret, MODEL.getAllapotLista())
        })
        
    }
} export default Controller
