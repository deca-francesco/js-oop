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
    porteEcarburante() {
        return `Porte: ${this.porte} | Alimentazione: ${this.carburante}`;
    }
}

const panda = new Veicolo("Fiat", 2019, "blu", 5, "benzina");

console.log(panda.informazioni());
console.log(panda.calcolaEta());

const corsa = new Automobile("Opel", 2020, "nera", 4, "benzina");

console.log(corsa.porteEcarburante());



const autoItaliane = [
    fiorino = new Automobile("Fiat", 1997, "bianco", 3, "metano"),
    giulia = new Automobile("Alfa Romeo", 2021, "blu", 5, "diesel"),
    fiat500 = new Automobile("Fiat", 2020, "bianco", 5, "elettrica"),
    doblo = new Automobile("Fiat", 2005, "blu", 5, "diesel"),
];


const carburanti = [];
autoItaliane.forEach(auto => carburanti.push(auto.carburante))
console.log(carburanti);


const colori = [];
for (let i = 0; i < autoItaliane.length; i++) {
    const auto = autoItaliane[i];
    colori.push(auto.colore);
}
console.log(colori);


const nomi = autoItaliane.map(auto => auto.marca);
console.log(nomi);

const elettricheArray = autoItaliane.filter(auto => auto.carburante === "elettrica");
const elettricheMarca = elettricheArray.map(auto => auto.marca);
console.log(elettricheMarca);
