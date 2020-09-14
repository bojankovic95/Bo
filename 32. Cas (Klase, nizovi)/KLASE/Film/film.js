export class Film {
    constructor(nas, rez, godIzd, o){
        this.naslov = nas;
        this.reziser = rez;
        this.godIzdanja = godIzd;
        this.ocene = o;
    }

    //seteri
    set naslov(n){
        this._naslov = n;
    }
    set reziser(r){
        this._reziser = r;
    }
    set godIzdanja(g){
        if(g >= 1800){
        this._godIzdanja = g;
        }else{
            alert ("Greska");
        }
    }
    set ocene(o){
        this._ocene = o;
    }
    
    //geteri
    get naslov(){
        return this._naslov;
    }
    get reziser(){
        return this._reziser;
    }
    get godIzdanja(){
        return this._godIzdanja;
    }
    get ocene(){
        return this._ocene;
    }

    stampaj(){
        console.log(this.naslov);
    }

    prosek(){
        let sum = 0;
        this.ocene.forEach(o => {
            sum += o;
        });
        return sum/this.ocene.length;
    }
}