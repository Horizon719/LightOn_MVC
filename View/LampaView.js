class LampaView{
    #index;
    constructor(szuloElem, index, szin){
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#htmlLetrehozasa();
        this.elem = $(".elem:last-child")
        this.divElem = this.elem.children("div");
        this.elem.on("click", ()=>{
            this.#esemenyLetrehozas("kattintas");
        })
        if (szin === "sarga") {
            this.elem.css("background-color", "orange")
        } else {
            this.elem.css("background-color", "rgb(77, 77, 77)");
        }
    }

    getIndex(){
        return this.#index;
    }

    #htmlLetrehozasa(){
        let txt =  `<div class="elem">
                    </div>`;
        this.szuloElem.append(txt);
    }

    szinBeallit(allapot) {
        if (allapot) {
            this.elem.css("background-color", "orange");
        } else {
            this.elem.css("background-color", "rgb(77, 77, 77)");
        }
    }
    #esemenyLetrehozas(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail: this});
        window.dispatchEvent(esemenyem);
    }

} export default LampaView
