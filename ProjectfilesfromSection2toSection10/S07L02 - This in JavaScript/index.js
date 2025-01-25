let user = {
    name: 'Sofia', // Property
    email: 'sofia@example.com',
    gender: 'female',
    getDetails(){
        console.log(`Name: ${this.name}, Email: ${this.email}, gender: ${this.gender}`);
        //console.log(this)
    }
};

user.getDetails()


