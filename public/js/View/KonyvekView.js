import KonyvView from "/../js/View/KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table><thead><tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr></thead><tbody></tbody></table>`);
        this.tabla = szuloElem.children("table:last-child");
        this.tbodyelem = this.tabla.children("tbody") 
        tomb.forEach(konyv => {
            const konyvObj = new KonyvView(konyv,this.tbodyelem);
        });
    }
}

export default KonyvekView;