import KonyvekView from "/../js/View/KonyvekView.js";
import KonyvModel from "/../js/Model/KonyvModel.js";
import KonyvekPublicView from "/../js/View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        this.token = $('meta[name="csrf-token"]').attr("content");
        this.vegpont = "konyvek";
        this.admin();
        
    }
    admin(){
        const konyvmodel = new KonyvModel(this.token);
        konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
        $(window).on("delete", (event)=>{
            konyvmodel.del(this.vegpont, event.detail.id);
        });
        $(window).on("edit", (event)=>{
            event.detail.cim += "42";
            konyvmodel.edit(this.vegpont, event.detail);
        })        
    }
    public(){
        const konyvmodel = new KonyvModel(this.token);
        konyvmodel.adatBe(this.vegpont, this.konyvPublicAdatok);
        $(window).on("vasarlas", (event)=>{
            konyvmodel.buy(event.detail.id);
        }) 

    }
    konyvPublicAdatok(tomb){
        let szuloElem = $('main');
        new KonyvekPublicView(tomb,szuloElem);
    }
    konyvAdatok(tomb) {
        let szuloElem = $('main');
        new KonyvekView(tomb,szuloElem);
    }
}

export default KonyvController;