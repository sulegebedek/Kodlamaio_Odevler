function perfectNumbers() {

    for (let sayi = 1; sayi < 1000; sayi++) { 

       let toplam = 0
        for (let i = 1; i <= sayi; i++) { 

            if (sayi % i == 0) {
                toplam = toplam + i;
            }
        }

        if (toplam == sayi*2) {
            console.log(sayi + " sayısı mükemmel sayıdır.")
        }
    }
}
perfectNumbers()