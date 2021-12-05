class Movie{
    setMovie(name,production,rating){
        this.movie=name;
        this.studio=production;
        // if(rating===null){
        //     rating="PG";
        // }
        this.rating=rating;
    }
    
    getMovie(){
        console.log("this movie "+this.movie +" of this production "+this.studio+ " is rated as "+this.rating);
    }

    getPG(){
        if(this.rating!=="PG"){
        console.log(this.movie +" of the "+ this.studio);
            
        }
    }


}

var movie1= new Movie();

movie1.setMovie("Spiderman","Marvel","PG13");

movie1.getPG();

