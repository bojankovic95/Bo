export class Knjiga{
    constructor(naslov, autor, godIzdanja, brojStrana, cena){
        this.naslov = naslov;
        this.autor = autor;
        this.godIzdanja = godIzdanja;
        this.brojStrana = brojStrana;
        this.cena = cena;
    }
    set naslov(n){
        this._naslov = n;
    }
    set autor(a){
        this._autor = a;
    }
    set godIzdanja(gi){
        this._godIzdanja = gi;
    }
    set brojStrana(bs){
        this._brojStrana = bs;
    }
    set cena(c){
        this._cena = c;
    }

    get naslov(){
        return this._naslov;
    }
    get autor(){
        return this._autor;
    }
    get godIzdanja(){
        return this._godIzdanja;
    }
    get brojStrana(){
        return this._brojStrana;
    }
    get cena(){
        return this._cena;
    }

    print(){
        console.log(this.naslov + " " + this.autor + " " + this.godIzdanja + " " + this.brojStrana + " " + this.cena);
    }

    obimna(){
        if(this.brojStrana > 600){
            return true;
        }else{
            return false;
        }
    }

    skupa(){
        if(this.cena > 8000){
            return true;
        }else{
            return false;
        }
    }

    dugackoIme(){
        if(this.autor.length > 18){
            return true;
        }else{
            return false;
        }
    }
}