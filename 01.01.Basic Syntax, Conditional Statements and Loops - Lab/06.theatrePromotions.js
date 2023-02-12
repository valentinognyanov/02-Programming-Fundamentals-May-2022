function theatrePromotions(typeDay, age) {
    let price = 0;
    switch(typeDay) {
        case "Weekday":
            if(age <= 18 && age >= 0) {
                price = 12;
            } else if(age <= 64 && age > 18) {
                price = 18;
            } else if(age <= 122 && age > 64) {
                price = 12;
            } else {
                console.log("Error!");
            }
            break;
        case "Weekend":
            if(age <= 18 && age >= 0) {
                price = 15;
            } else if(age <= 64 && age > 18) {
                price = 20;
            } else if(age <= 122 && age > 64) {
                price = 15;
            } else {
                console.log("Error!");
            }
            break;
        case "Holiday":
            if(age <= 18 && age >= 0) {
                price = 5;
            } else if(age <= 64 && age > 18) {
                price = 12;
            } else if(age <= 122 && age > 64) {
                price = 10;
            } else {
                console.log("Error!");
            }
            break;
    }
    if(age >= 0 && age <= 122){
        console.log(`${price}$`);
    }
}
theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);
theatrePromotions('Weekday', 463278482);