export class Product {
    name: string;
    price: number;
    image: ImageBitmapSource;

    constructor(name: string, price: number, image: ImageBitmapSource) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
