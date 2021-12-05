class Uber{
    setRange(ride , km){
        this.ride = ride;
        this.km = km;
        
    }
    
    getPrice(){
        if(this.ride=="Sedan"){
            console.log("the price is "+this.km *12 + " Rs.");
        }
        
        else if(this.ride=="Mini"){
            console.log("the price is "+this.km *9 + " Rs.");
        }
        
        if(this.ride=="SUV"){
             console.log("the price is "+this.km *15 + " Rs.");
        }
           
        
    }
}

let ride1= new Uber();

ride1.setRange("SUV",10);

ride1.getPrice();