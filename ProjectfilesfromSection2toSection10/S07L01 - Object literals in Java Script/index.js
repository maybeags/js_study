let user = {
    name: 'Sofia', // Property
    email: 'sofia@example.com',
    gender: 'female',
    getDetails: function(){
        console.log(`Name: ${user.name}, Email: ${user.email}, gender: ${user.gender}`);
    }
};


user.getDetails()