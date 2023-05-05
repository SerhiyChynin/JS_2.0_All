class F1 {
    constructor(p, cl, d) {
        this.message = p;  
        this.cssClass = cl;
        this.out = d;
    }
    showAlert() {
        
    document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
        
    }
}