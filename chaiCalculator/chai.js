function calculateChaiIngredients(numberOfCups){

    // NB: FOR BROSWER PROMPT UNCOMMENT LINE (4) AND COMMENT OUT LINE (6) AND REMOVE THE PARAMETER
    // let numberOfCups = Number(prompt("Enter number of cups ypu want"))

    numberOfCups = Number(numberOfCups)

    // Standard ingrients for one cup of chai

    const amountOfWater = 200 //ml
    const amountOfMilk = 50 //ml
    const amountOfTeaLeaves = 1 //tablespoon
    const amountOfSugar = 2 //tablespoon

    // Calculates the total number of ingredients or according to users specifications

    const totalAmountOfWater = amountOfWater * numberOfCups
    const totalAmountOfMilk =  amountOfMilk * numberOfCups 
    const totalAmountOfTeaLeaves = amountOfTeaLeaves * numberOfCups
    const totalAmountOfSUgar = amountOfSugar * numberOfCups

    //Prints respective users recipe

    console.log(`Ingredients for ${numberOfCups} cups of tea you will need:`)
    console.log(`-Approximately ${totalAmountOfWater} ml of water`)
    console.log(`-Aproximately ${totalAmountOfMilk} ml of milk`)
    console.log(`-Approximately ${totalAmountOfTeaLeaves} tablespoons of tea leaves(majani)`)
    console.log(`-Aproximately ${totalAmountOfSUgar} tablespoons of sugar(sukari)`)

}
calculateChaiIngredients()