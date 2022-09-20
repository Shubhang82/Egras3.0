import {
    AbstractControl
  } from '@angular/forms';

export function Required(control: AbstractControl){
        if(control.value== null ){
            //alert(control.value);
            return{'Required': 'This is Required Field'};
        }
        else {
        if(control ){
            
            if(control.value.toString().trim().length > 0){
                return null;   
            }
            else{
                return{'Required': 'This is Required Field'};
            }
    
        }
        return null;}
    }

    export function RequiredNum(control: AbstractControl){
        if(control && (control.value!== null || control.value!==undefined)){
            
            if(Math.ceil(Math.log(control.value + 1) / Math.LN10)> 0){
                return null;   
            }
            else{
                return{'RequiredNum': 'This is Required Field'};
            }
    
        }
        return null;
    }
    
