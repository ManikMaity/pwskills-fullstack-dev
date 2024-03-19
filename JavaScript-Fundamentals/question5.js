function estimateDelivery(str = ""){
    const deliveryType = str.toLowerCase();
    switch (deliveryType) {
        case "standard":
            console.log("You will get your product within 3 - 5 days");
            break;
        case "express" :
            console.log("You will get your product within 1 - 2 days");
            break;
        case "overnight" :
            console.log("You will get your product tomorrow");
            break;
        default:
            console.error("Invalid Input - Please choose between 'standard', 'express' or 'overnight' ");
            break;
    }
}

estimateDelivery("standard"); //You will get your product within 3 - 5 days
estimateDelivery("OVERNIGHT"); // You will get your product tomorrow
estimateDelivery("manik"); // Invalid Input - Please choose between 'standard', 'express' or 'overnight' 
