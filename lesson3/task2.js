class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber
        this.product = []
    }
    addProduct(product) {
        this.product.push(product)
    }
    getTotalPrice() {
        return this.product.reduce((total, product) => total + product.price, 0)
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice());