export class Product {
    name: string;
    price: number;
    sale: boolean;
    image: string;

    constructor(name: string, price: number, sale: boolean, image: string) {
        this.name = name;
        this.price = price;
        this.sale = sale;
        this.image = 'galletas.jpg';
    }
}
