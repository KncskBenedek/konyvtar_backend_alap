/* egy könyv divbe kosárba gombal*/
import KonyvPublicView from "/../js/View/konyvPublicView.js";
class KonyvekPublicView{
    constructor(tomb, szuloElem){
        tomb.forEach(konyv => {
            const konyvObj = new KonyvPublicView(konyv, szuloElem);
        });
        
    }
    
}
export default KonyvekPublicView;