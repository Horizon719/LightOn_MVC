import Model from "../Model/Model.js"
import JatekTerView from "../View/JatekTerView.js";

class Controller{
    #lista
    constructor(){
        const MODEL = new Model();
        this.#lista = MODEL.getAllapotLista();
        new JatekTerView($(".jatekter"), 3, this.#lista);
    
        $(window).on("kattintas", function(event){
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.szinBeallit(MODEL.getAllapotLista()[event.detail.getIndex()]);
            new JatekTerView($(".jatekter"), 3, MODEL.getAllapotLista())
        })
        
    }
} export default Controller
