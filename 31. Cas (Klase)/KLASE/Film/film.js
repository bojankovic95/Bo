export class Film {
    constructor(nas, rez, godIzd){
        this.naslov = nas;
        this.reziser = rez;
        this.godIzdanja = godIzd;
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

    stampaj(){
        console.log(this.naslov);
    }
}