function friendNumbers(sayi1, sayi2) {

    let toplam1 = 0;
    let toplam2 = 0;

    for (let index = 0; index < sayi1; index++) {

        if (sayi1 % index == 0) {
            toplam1 = toplam1 + index;
        }
    }

    for (let index = 0; index < sayi1; index++) {

        if (sayi2 % index == 0) {
            toplam2 = toplam2 + index;
        }
    }

    if (toplam1 == sayi2 && toplam2 == sayi1) {
        console.log(sayi1 + " ve " + sayi2 +" sayıları arkadaş sayıdır.")
    }
    else
    {
        console.log(sayi1 + " ve " + sayi2 +" sayıları arkadaş sayı değildir.")
    }
}

friendNumbers(210,284)