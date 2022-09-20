import { AbstractControl } from "@angular/forms";

export function ValidEmail(control: AbstractControl){
    if(control && (control.value!== null || control.value!==undefined)){
        const regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
        if(!regex.test(control.value)){
            return{'ValidEmail': 'This Email ID is invalid.'};
        }

    }
    return null;
}