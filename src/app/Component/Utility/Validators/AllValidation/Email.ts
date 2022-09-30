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
    const regex = new RegExp(/^0.*$/);
    const regex1 = new RegExp(/^1.*$/);

    if (control && (control.value !== null || control.value !== undefined)) {
        // const regex = new RegExp(/^0.*$/);
        if (regex.test(control.value) || regex1.test(control.value)) {
            return { 'StartWith0': 'Field not start with 0 or 1.' };
        }

    }
    return null;
}
export function SpecialChar(control: AbstractControl) {
    // const regex = new RegExp(/@$!*#=~_-/);
    let regex = new RegExp(/^[@$!%*#?~(=,/<>{+|}).`&^_-].*$/)
    // const regex = new RegExp(/^!@#_-~=()_+-=\[\]{};':"|,.<>\/?/);
    // const regex = new RegExp('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}');
    if (control && (control.value !== null || control.value !== undefined)) {
        if (regex.test(control.value)) {
            return { 'SpecialChar': 'Field not start with Special Character' };
        }
    }
    return null;
}
