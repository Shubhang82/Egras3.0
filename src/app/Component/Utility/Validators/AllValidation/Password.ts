import { FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";


// export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null => 
//  {
//       const controlNew = FormGroup.controls[controlName];
//       const matchingControl = FormGroup.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors?.['mustMatch']) {
//         return;
//       }

//       // set error on matchingControl if validation fails
//       if (controlNew.value !== matchingControl.value) {
//         matchingControl.setErrors({ mustMatch: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//       return null;
//     };
//   }


  export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

    let value: string = control.value || '';
    let msg = "";
    if (!value) {
      return null
    }
  
    let upperCaseCharacters = /[A-Z]+/g;
    let lowerCaseCharacters = /[a-z]+/g;
    let numberCharacters = /[0-9]+/g;
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (upperCaseCharacters.test(value) === false || lowerCaseCharacters.test(value) === false || numberCharacters.test(value) === false || specialCharacters.test(value) === false) {
      return {
        'passwordStrength': 'Password must contain numbers, lowercase letters, uppercase letters and special characters.'
      };
  
    }
    return null;
}

export function passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors?.['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: 'Confirm Password should be same as password' });
        return { passwordMismatch: 'Confirm Password should be same as password' };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

