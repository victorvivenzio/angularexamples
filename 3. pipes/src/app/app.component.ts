import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre:string = "Victor";
  public nombreSinFormato:string = "VICtor Alexander vivEnzio aBREU";
  public arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  public PI:number = Math.PI;
  public percent:number = 0.223;
  public money:number = 12345.6;
  public date:Date = new Date();
  public video:string = "tgbNymZ7vqY";
  public passwordActive:boolean = true;
  public heroes:any = {
    nombre:'logan',
    clave:'wolverine',
    direccion:{
      calle:'mansion',
      nombre:'xmen'
    }
  }

  public valorPromesa = new Promise( (resolve,reject)=>{
    setTimeout( ()=>resolve('Llego la data!!'), 3500 );
  } );

  public activatePassword():void{
    this.passwordActive = !this.passwordActive;
  }
}
