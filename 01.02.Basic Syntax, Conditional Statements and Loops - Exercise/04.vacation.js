function vacation(people, type, day) {
    let totalPrice = 0;

    switch(type) {
        case "Students":
            if(day === "Friday") {
                totalPrice = people * 8.45;
            } else if(day === "Saturday") {
                totalPrice = people * 9.8;
            } else if(day === "Sunday") {
                totalPrice = people * 10.46;
            }
            break;
        case "Business":
            if(people >= 100) {
                people -= 10;
            }
            if(day === "Friday") {
                totalPrice = people * 10.9;
            } else if(day === "Saturday") {
                totalPrice = people * 15.6;
            } else if(day === "Sunday") {
                totalPrice = people * 16;
            }
            break;
        case "Regular":
            if(day === "Friday") {
                totalPrice = people * 15;
            } else if(day === "Saturday") {
                totalPrice = people * 20;
            } else if(day === "Sunday") {
                totalPrice = people * 22.5;
            }
            break;
    }
    if(type === "Students" && people >= 30) {
        totalPrice *= 0.85;
    } else if(type === "Regular" && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");