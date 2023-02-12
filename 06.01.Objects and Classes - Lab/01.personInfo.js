function personInfo(firstName, lastName, age) {
    let result = {};
    result.firstName = firstName;
    result.lastName = lastName;
    result.age = age;

    return result;
}
personInfo("Peter", "Pan", "20");
console.log('__________');
personInfo("George", "Smith", "18");