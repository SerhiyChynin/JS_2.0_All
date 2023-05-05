class Goods2 extends Goods {
    constructor(name, price, image, count, sale) {
        super(name, price, image, count);
        this.sale = sale;
    }
}