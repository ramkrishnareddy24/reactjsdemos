function userId({id}){
    return id;
}

function whoIs({displayName, fullName:{firstName: fname}}){
    console.log(displayName + " a.k.a " + fname); 
}

var user = {
    id: 100,
    displayName: "Jim",
    fullName: {
        firstName: "James"
    }
};

console.log("userId: "+userId(user));
whoIs(user); //destructor objects into function parameters.