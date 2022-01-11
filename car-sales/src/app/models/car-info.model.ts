export class CarInfo{
    public name:string;
    public imagePath:string;
    public price:string;
    public link:string;

    constructor(name:string,imagePath:string,price:string,link:string){
        this.name=name;
        this.imagePath=imagePath;
        this.price=price;
        this.link=link;
    }
}