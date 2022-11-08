/* listázzuk a könyveket divekbe*/
class KonyvPublicView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`<div class="elem">
        <div class="cim">${this.#elem.cim}</div>
        <div class="szerzo">${this.#elem.szerzo}</div>
        <div class="ar">${this.#elem.ar}</div>
        <button id="V${this.#elem.id}">Vásárlás</button>
        </div>`)
        this.konyvElem =  szuloElem.children("div:last-child");
         this.vasarGomb = this.konyvElem.children("button:last-child");

        this.vasarGomb.on("click", ()=>{
            
            this.kattTrigger("vasarlas");
        })/* */
    }
    kattTrigger(esemNev) {
        //console.log(esemNev);
        let esemeny = new CustomEvent(esemNev, { detail: this.#elem.id });
        window.dispatchEvent(esemeny);
    }
}
export default KonyvPublicView;
