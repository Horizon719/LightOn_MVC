import LampaView from "./LampaView.js";

class JatekTerView{
    constructor(szuloElem, n, allapotLista){
        for (let i = 0; i < n*n; i++) {
            if (allapotLista[i]) {
                new LampaView(szuloElem, i, "sarga");
            } else {
                new LampaView(szuloElem, i, "szurke");
            }
        }
    }

} export default JatekTerView