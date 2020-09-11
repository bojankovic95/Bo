export class Pacijent {
    constructor(im, vis, tez){
        this.ime = im;
        this.visina = vis;
        this.tezina = tez;
    }

    set ime(value){
        this._ime = value;
    }
    set visina(value){
        if(value > 0 && value < 250){
        this._visina = value;
        }else{
            alert("Greska");
        }
    }
    set tezina(value){
        if(value > 0 && value < 550){
        this._tezina = value;
        }else{
            alert("Greska");
        }
    }

    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }

    stampaj(){
        console.log(this.ime + " " + this.visina + " " + this.tezina);
    }

    bmi(){
        let Bmi = this.tezina/(this.visina)**2;
        console.log(Bmi);
    }

    kritican(){
        let Bmi = this.tezina / (this.visina) ** 2;
        if(Bmi < 15 || Bmi > 40){
            return true;
        }else{
            return false;
        }
    }
}