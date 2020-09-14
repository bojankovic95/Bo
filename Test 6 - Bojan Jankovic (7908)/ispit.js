export class Ispit {
    constructor(na, da, o, nast){
        this.naziv = na;
        this.datum = da;
        this.ocena = o;
        this.nastavnik = nast;
    }
    set naziv(n){
        this._naziv = n;
    }
    set datum(d){
        this._datum = d;
    }
    set ocena(o){
        if(o >= 6 && o <= 10){
            this._ocena = o;
        }else{
            alert ("greska");
        }
    }
    set nastavnik(na){
        this._nastavnik = na;
    }

    get naziv(){
        return this._naziv;
    }
    get datum(){
        return this._datum;
    }
    get ocena(){
        return this._ocena;
    }
    get nastavnik(){
        return this._nastavnik;
    }
    tekucaGodina(){
        let datum = new Date();
        let godina = datum.getFullYear;
        if(this.datum.startsWith(godina)){
            return true;
        }else{
            return false;
        }
    }

    ocenaSlovima(){
        if(this.ocena == 6){
            return "SEST";
        }else if(this.ocena == 7){
            return "SEDAM";
        }else if(this.ocena == 8){
            return "OSAM";
        }else if(this.ocena == 9){
            return "DEVET";
        }else if(this.ocena == 10){
            return "DESET";
        }
    }
}