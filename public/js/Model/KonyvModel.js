class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;
     }

    adatBe(vegpont, myCallBack) {
        
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } 
    edit(vegpont, adat){
        console.log(vegpont + "editke " + adat.id);
        vegpont = vegpont + "/" + adat.id;
        fetch(vegpont,  {
            method: 'PUT',
            headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': this.token   
                     },
            body: JSON.stringify(adat),
                }
            )
        .then((response)=>{response.json()})
        .then((data)=>{console.log("Módosítottam:" + data.updatedAt);})
        .catch((error)=>{console.log("error: " + error);})
    }

    del(vegpont, adat){
        console.log(vegpont + " el törölget " + adat);
        vegpont = vegpont + "/" + adat;
        fetch(vegpont,  {
            method: 'DELETE',
            headers: {
                        'X-CSRF-TOKEN': this.token   
                     } 
                }
            )
        .then()
        .then(()=>{console.log("sikeres törlés")})
        .catch((error)=>{console.log("error: " + error);})
    }

    buy(adat){
        console.log("vásrolgat " + adat);
    }
}

export default KonyvModel;