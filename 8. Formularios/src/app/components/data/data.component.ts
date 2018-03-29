import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  public form: FormGroup;

  public user: Object = {
    fullname: {
      name: 'Victor',
      lastname: 'Vivenzio'
    },
    email: 'victorvivenzio@gmail.com',
    hobbies: ['Correr', 'Comer', 'Tirar']
  };

  constructor() {
    this.form = new FormGroup({
      'fullname': new FormGroup({
          'name': new FormControl('',
            [
              Validators.required,
              Validators.minLength(3)
            ]),
          'lastname': new FormControl('', [Validators.required, this.noCaps])
        }
      ),
      'email': new FormControl('',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
        ]
      ),
      'hobbies': new FormArray([
        new FormControl('', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required ),
      'password2': new FormControl(''),
      'username': new FormControl('',Validators.required, this.checkUsername)
    });

    this.form.controls['password2'].setValidators([
      Validators.required,
      this.noPass.bind(this)
    ]);
    // this.form.patchValue(this.user);

    this.form.controls['username'].valueChanges.subscribe( (data) => {
      console.log(data)
    } )
    this.form.controls['username'].statusChanges.subscribe( (data) => {
      console.log(data)
    } )

  }

  private noCaps(control: FormControl): { [p: string]: boolean } {
    if (/[A-Z]/.test( control.value )) {
      return {nocaps: true};
    }
    return null;
  }

  public  noPass(control: FormControl ): {[s: string]: boolean} {
    let form: any = this.form.controls;
    if (control.value !== form['password1'].value) {
      return {nocaps: true};
    }
    return null;
  }sdfs

  public checkUsername(control: FormControl): Promise<any>|Observable<any>{
    let promise = new Promise( (resolve, reject) => {
      setTimeout(()=>{
        if (control.value === "vivenzio"){
          resolve({ exist:true });
        } else {
          resolve( null );
        }
      },3000)
    });
    return promise;
  }

  public addHobbie(): void {

    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('', Validators.required)
    );
  }

  public saveForm(): void {
    console.log(this.form);

    // this.form.reset({
    //   fullname : {
    //     name: '',
    //     lastname: ''
    //   },
    //   email: '',
    //   hobbies: []
    // });
    //
    // const hobbiesGroup = <FormArray> this.form.controls['hobbies'];
    // for (let index = hobbiesGroup.length - 1; index > 0; index--) {
    //   hobbiesGroup.removeAt(index);
    // }

  }
}
