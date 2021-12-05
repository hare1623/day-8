class Person{
    setValues(name,age,gender,dob,occupation){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.DOB=dob;
        this.occupation=occupation;
    }
    
    getData(){
        console.log(`
        Name :${this.name}
        Age :${this.age}
        Gender :${this.gender}
        Date of Birth :${this.DOB}
        Occupation :${this.occupation}`);
    }
}

let person1 = new Person();
person1.setValues("Hare",21,"Male","16-05-2000","FullStack Developer");
person1.getData();