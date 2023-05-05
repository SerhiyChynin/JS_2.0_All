class Goods {
    constructor(name, price, image, count) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.count = count;
        
    }
    
    draw() {
        let div = document.createElement('div');
        div.classList.add('goods');
        let h1 = document.createElement('h1');
        h1.innerHTML = `${this.name}`;
        let p = document.createElement('p');
        p.classList.add('price');
        p.innerHTML = `${this.price}`;
        let img = document.createElement('img');
        img.src = `${this.image}`;
        img.alt = `${this.name}`;
        div.append(h1);
        div.append(p);
        div.append(img);
        return div;
    }
}

