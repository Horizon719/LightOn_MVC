class LampaView{
    #index;
    constructor(szuloElem, index, szin){
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#htmlLetrehozasa();
        this.elem = $(".elem:last-child")
        this.divElem = this.elem.children("div");
        this.ujGomb = $(".uj");
        this.ujGomb.on("click", ()=>{
            location.reload();
        })
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
        let uj = $(".ujJatek");
        uj.html(`<button class="uj">Új játék</button>`);
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
