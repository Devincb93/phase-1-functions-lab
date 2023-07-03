function distanceFromHqInBlocks(someValue) {
    let hqBlocks = 42;
    let results = 0
   if (someValue >= hqBlocks){
    results = someValue - hqBlocks
   }
   if (hqBlocks > someValue) {
    results = hqBlocks - someValue
   }
    return results;
}
function distanceFromHqInFeet(someValue){
    
    let stored = distanceFromHqInBlocks(someValue);
    let results = 0
    let blockInFeet = 264
    results = blockInFeet * stored
   
    return results;
}
function distanceTravelledInFeet(start, destination) {
    let blockLength = 264;
    let results;
    if (destination> start) {
        results = (destination - start) * blockLength
    }
    else if(destination < start) {
        results =(start - destination) * blockLength
    }
    return results;

}
function calculatesFarePrice(start, destination) {
    let chargeByFoot = .02
    let distance = distanceTravelledInFeet(start, destination)
    let results;
   if ( distance < 400) {
    return 0
   }
   else if (distance > 400 && distance <= 2000 ) {
    results = (distance - 400)* chargeByFoot
    return results;
   }
   else if (distance > 2000 && distance <= 2500){
    return 25;
   }
   else if (distance >= 2500){
    return  `cannot travel that far`
   }
    
    
}