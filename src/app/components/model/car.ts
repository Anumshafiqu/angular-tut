// A class is a blueprint for objects but can also include behavior
//  (i.e., methods/functions). You can instantiate it using new.

export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    carImage: string;
    regNo: string
    constructor() {
        this.carId = 0,
            this.brand = '',
            this.model = '',
            this.year = 0,
            this.color = '',
            this.dailyRate = 0,
            this.carImage = '',
            this.regNo = ''

}

}
// An interface is a blueprint for an object. It defines the shape (i.e., the structure),
//  but not the implementation.
//  It’s used mostly for type-checking.
export interface IcarList {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    carImage: string;
    regNo: string
}