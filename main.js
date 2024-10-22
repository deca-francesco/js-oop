console.log("js linked");

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    informazioni() {
        // return this
        const info = [];
        for (const key in this) {
            let element = this[key];
            info.push(element);
        }
        return info.join(" | ")
    }

    calcolaEta() {
        const now = new Date().getFullYear();
        // console.log(now);
        return `il veicolo ha ${now - this.anno} anni`;
    }
}

class Automobile extends Veicolo {

}

const panda = new Veicolo("Fiat", 2019, "blu", 5, "benzina");

console.log(panda.informazioni());
console.log(panda.calcolaEta());
