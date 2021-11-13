function primeNumbers() {

    for (let sayi = 2; sayi < 1000; sayi++) { 

       let sayac = 0
        for (let i = 2; i <= sayi; i++) { 

            if (sayi % i == 0) {
                sayac++;
            }
        }

        if (sayac == 1) {
            console.log(sayi + " sayısı asal sayıdır.")
        }
    }
}
primeNumbers()