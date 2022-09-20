import { AbstractControl } from "@angular/forms";

export function Alphabet(control: AbstractControl){
    if(control && (control.value!== null || control.value!==undefined)){
        const regex = new RegExp(/^[a-zA-Z ]*$/);
        if(!regex.test(control.value)){
            return{'Alphabet': 'Only Alphabets are allowed.'};
        }

    }
    return null;
}


export function cannotContainSpace(control: AbstractControl) {
    if(control && (control.value!== null || control.value!==undefined)){
        const regex = new RegExp(/\S/);
        if(!regex.test(control.value)){
            return{'cannotContainSpace': 'Space is not allowed.'};
        }

    }
    return null;
  }
