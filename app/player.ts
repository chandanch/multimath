class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName(): string {
        /*  use the `this` keyword to refer to the memebers of the class.
            this keyword followed by the period(.) and the 
            member of the class that we want to reference 
        */
        return this.name.toUpperCase();
    }
}