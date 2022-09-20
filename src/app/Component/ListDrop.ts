import { Injectable } from '@angular/core';

const STORE_KEY = 'lastAction';

@Injectable({
    providedIn: 'root'
})
export class List {

    //   public getLastAction() {
    //     return parseInt(localStorage.getItem(STORE_KEY) || '{}');
    //   }
    public onCity() {
        return [
            {
                id: 1,
                name: "jaipur"
            },
            {
                id: 2,
                name: "kota"
            },
            {
                id: 3,
                name: "dosa"
            }
        ]
    }
    public onCountry() {
        return [
            {
                id: 1,
                name: "India"
            },
        ]
    }
    public onState() {
        return [
            {
                id: 1,
                name: "Andhra Pradesh"
            },
            {
                id: 2,
                name: "Arunachal Pradesh"
            },
            {
                id: 3.1,
                name: "Andaman and Nicobar Islands"
            },
            {
                id: 3,
                name: "Assam"
            },
            {
                id: 4,
                name: "Bihar"
            },
            {
                id: 5,
                name: "Chhattisgarh"
            },
            {
                id: 5.1,
                name: "Chandigarh"
            },
            {
                id: 5.2,
                name: "Dadra and Nagar Haveli and Daman and Diu"
            },
            {
                id: 5.3,
                name: "Delhi"
            },
            {
                id: 6,
                name: "Goa"
            },
            {
                id: 7,
                name: "Gujarat"
            },
            {
                id: 8,
                name: "Haryana"
            },
            {
                id: 9,
                name: "Himachal Pradesh"
            },
            {
                id: 9.1,
                name: "Jammu and Kashmir"
            },
            {
                id: 10,
                name: "Jharkhand"
            },
            {
                id: 11,
                name: "Karnataka"
            },
            {
                id: 12,
                name: "Kerala"
            },
            {
                id: 12.1,
                name: "Ladakh"
            },
            {
                id: 12.2,
                name: "Lakshadweep"
            },
            {
                id: 13,
                name: "Madhya Pradesh"
            },
            {
                id: 14,
                name: "Maharashtra"
            },
            {
                id: 15,
                name: "Manipur"
            },
            {
                id: 16,
                name: "Meghalaya"
            },
            {
                id: 17,
                name: "Mizoram"
            },
            {
                id: 18,
                name: "Nagaland"
            },
            {
                id: 19,
                name: "Odisha"
            },
            {
                id: 19.1,
                name: "Puducherry"
            },
            {
                id: 20,
                name: "Punjab"
            },
            {
                id: 21,
                name: "Rajasthan"
            },
            {
                id: 22,
                name: "Sikkim"
            },
            {
                id: 23,
                name: "Tamil Nadu"
            },
            {
                id: 24,
                name: "Telangana"
            },
            {
                id: 25,
                name: "Tripura"
            },
            {
                id: 26,
                name: "Uttar Pradesh"
            },
            {
                id: 27,
                name: "Uttarakhand"
            },
            {
                id: 28,
                name: "West Bengal"
            },
        ]
    }
    public onQuestion() {
        return [
            {
                id: 1,
                name: "What's Your Mother Middle name?"
            },
            {
                id: 2,
                name: "What's your Birth place?"
            },
            {
                id: 3,
                name: "What was your childhood nickname?"
            },
            {
                id: 4,
                name: "What was the color of your first car?"
            },
            {
                id: 5,
                name: "What is your father's middle name?"
            },
            {
                id: 6,
                name: "What is your favorite sport?"
            },
            {
                id: 7,
                name: "Who is your favorite animal?"
            },
            {
                id: 8,
                name: "Who was your childhood hero?"
            },
            {
                id: 9,
                name: " What is your favorite teacher's nickname?"
            },

        ]
    }
}
