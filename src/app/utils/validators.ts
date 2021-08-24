import { AbstractControl } from "@angular/forms";


export class MyValidador{
    static isPriceValid(control: AbstractControl){
        const value = control.value
        console.log(value);
        
        if(value > 10000 ){
            return {price_invalid: true}
        }
        return null
    }

    /// LOGIN 
    static isUserValid(control: AbstractControl){
        const value = control.value
        console.log(value);
        
        if (value.length > 7 ) {
            return {user_invalid: true}
        }
        return null
    }
    static isPasswordValid(control: AbstractControl){
        const value = control.value
        console.log(value);
        
        if (value.length > 16 ) {
            return {password_invalid: true}
        }
        if (value.length < 5) {
            return {password_invalid: true} 
        }
        return null
    }
}