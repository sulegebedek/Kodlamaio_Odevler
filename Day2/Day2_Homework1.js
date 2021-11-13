function findPrime(... numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        
        let count = 0
        for (let j = 1; j <= numbers[i]; j++) {

            if (numbers[i] % j == 0 ) {
                count++
            }  
        }

        if (count == 2) {
            console.log(numbers[i] + "Asal Sayıdır")
        }
        else
        {
            console.log(numbers[i] +" Asal sayı değil")
        }
    }
}
findPrime(2,4,8,9,11,15,17)
