class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
        
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id="M${elem.id}">módosít</button></td>
        <td><button id="T${elem.id}">töröl</button></td>
        </tr>`);
        this.recordElem = szuloElem.children("tr:last-child");
        this.#elem = elem;
        this.modElem = this.recordElem
            .children("td:nth-child(5)")
            .children("button");

        this.torElem = this.recordElem
            .children("td:nth-child(6)")
            .children("button");
        console.log(this.torElem);
        console.log(this.modElem);
        this.modElem.on("click", () => {
            this.kattTrigger('edit');
        });
        this.torElem.on("click", () => {
            this.kattTrigger('delete');
        });
    }
    kattTrigger(esemNev) {
        //console.log(esemNev);
        let esemeny = new CustomEvent(esemNev, { detail: this.#elem});
        window.dispatchEvent(esemeny);
    }

}

export default KonyvView;
