
class F2 extends F1{
    constructor(p,cl,d, i) {
        super(p,cl,d);
        this.icon = i;

    }
    showIcon() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">
        <span class="material-symbols-outlined">${this.icon}</span> ${this.message}</p>`;
    }

}