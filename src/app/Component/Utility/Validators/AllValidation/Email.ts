import { AbstractControl } from "@angular/forms";

export function ValidEmail(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
        if (!regex.test(control.value)) {
            return { 'ValidEmail': 'This Email ID is invalid.' };
        }

    }
    return null;
}
// var regExp = 
export function StartWith0(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^0.*$/);
        if (!regex.test(control.value)) {
            return { 'StartWith0': 'Field not start with 0 and Special Character.' };
        }

    }
    return null;
}