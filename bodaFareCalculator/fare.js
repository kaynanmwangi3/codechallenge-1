function calculateBodaFare(distanceInKm){

    distanceInKm = Number(distanceInKm)

    // NB:FOR BROWSER PROMPT PURPOSES UNCOMMENT LINE (6) AND COMMENT OUT LINE (3) AND REMOVE THE PARAMETER
    // let distanceInKm = Number(prompt("Enter distance to of trip in kilometers:"));



    const baseFare = 50   //KES
    const chargePerKm = 15 //KES

    const totalFare = baseFare + (distanceInKm * chargePerKm)

    console.log(` Total ditsance is ${distanceInKm} kilometers and that will cost a total of ${totalFare} KES`)

}
calculateBodaFare()