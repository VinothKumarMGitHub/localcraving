

export class InfoCardModel {

    constructor(){
        this.image = "";
        this.name = "";
        this.deliveryTime = 0;
        this.rating = 0;
        this.id = "";
        this.deliveryCost = 0.0;
    }

    public static defaultObject(){
        let defaultObject =  new InfoCardModel () ;

        defaultObject.id = "1";
        defaultObject.rating = 4.5;
        defaultObject.deliveryCost = 1.2;
        defaultObject.image = "food1.jpg"
        defaultObject.deliveryTime = 10; //in minutes 
        defaultObject.name = "Denver Biscuit Co. (Colorado Springs)";

        return defaultObject;
    }

    public id : string;
    public image : string;
    public name : string;
    public rating : number;
    public deliveryTime : number;
    public deliveryCost: number;
}