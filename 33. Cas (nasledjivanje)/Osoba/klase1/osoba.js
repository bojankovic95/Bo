export class Osoba{
    constructor(i, p, gr){
        this.ime = i;
        this.prezime = p;
        this.godRodjenja = gr;
    }
    set ime(i){
        this._ime = i;
    }
    set prezime(p){
        this._prezime = p;
    }
    set godRodjenja(gr){
        this._godRodjenja = gr;
    }
    get ime(){
        return this._ime;
    }
    get prezime(){
        return this._prezime;
    }
    get godRodjenja(){
        return this._godRodjenja;
    }

    ispisiOsobu(){
        console.log("Ime: " + this.ime + " prezime: " + this.prezime + " godina rodjenja: " + this.godRodjenja);
    }
}