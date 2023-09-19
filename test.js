class Person{
    #fname;
    #lname;
    constructor(fname,lname){
        this.#fname = fname;
        this.#lname = lname;
    }

    get getFname(){
        return this.#fname;
    }

    set setFname(fname){
      this.#fname = fname;
    }
}

let dan = new Person("samuel", "adu");
console.log(dan.getFname);