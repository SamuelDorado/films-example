import { User } from './../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export const validateDNI = function(control: FormControl) {
    const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letter = DNI_LETTERS.charAt( parseInt( control.value, 10 ) % 23 );
    
    return (letter === control.value.charAt(8))? null : { valid: false}
};
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  myForm: FormGroup
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      surname: new FormControl('', <any>Validators.required),
      dni: new FormControl('',[<any>Validators.pattern(/^(\d{8})([A-Z])$/), validateDNI]), //TODO añadir Validador Custom
      birthdate: new FormControl(''),
      email: new FormControl('', <any> Validators.email),
      address: new FormGroup({
          street: new FormControl(''),
          postcode: new FormControl('')
      })
  });
      const userData = {
        name: 'Janet',
        surname: 'Jackson', // required
        dni: '2222222J', //DNI regex validation
        birthdate: '', // 00/00/0000 format validation
        email: '',//email validation
        address: {
            street: 'High street',
            postcode: '94043'
        }
    };
    this.myForm.setValue(userData)
  }

}
