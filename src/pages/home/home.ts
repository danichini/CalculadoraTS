import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Resultado: number;
  Operacion: string;
  Err: string;
  save: string;
  regexp = new RegExp(/[-+*\/]{2,3}/g);

  constructor(public navCtrl: NavController) {
    this.Operacion="";
  }
  addSuma(){
    const isExisting = this.regexp.test(this.Operacion);
    if (isExisting === false) {
      this.save = this.Operacion;
      this.Operacion = this.Operacion + "+"; 
      const isExisting = this.regexp.test(this.Operacion);
      if (isExisting === true) {
        this.Err = "debe agregar un numero depues de un simbolo";
        this.Operacion = this.save;
      }
    }else{
      this.Err = "debe agregar un numero depues de un simbolo2";
    }
  }
  addResta(){
    const isExisting = this.regexp.test(this.Operacion);
    if (isExisting === false) {
      this.save = this.Operacion;
      this.Operacion = this.Operacion + "-"; 
      const isExisting = this.regexp.test(this.Operacion);
      if (isExisting === true) {
        this.Err = "debe agregar un numero depues de un simbolo";
        this.Operacion = this.save;
      }
    }else{
      this.Err = "debe agregar un numero depues de un simbolo2";
    }
  }
  addMult(){
    const isExisting = this.regexp.test(this.Operacion);
    if (isExisting === false) {
      this.save = this.Operacion;
      this.Operacion = this.Operacion + "*"; 
      const isExisting = this.regexp.test(this.Operacion);
      if (isExisting === true) {
        this.Err = "debe agregar un numero depues de un simbolo";
        this.Operacion = this.save;
      }
    }else{
      this.Err = "debe agregar un numero depues de un simbolo2";
    } 
  }
  addDivi(){
    const isExisting = this.regexp.test(this.Operacion);
    if (isExisting === false) {
      this.save = this.Operacion;
      this.Operacion = this.Operacion + "/"; 
      const isExisting = this.regexp.test(this.Operacion);
      if (isExisting === true) {
        this.Err = "debe agregar un numero depues de un simbolo";
        this.Operacion = this.save;
      }
    }else{
      this.Err = "debe agregar un numero depues de un simbolo2";
    }
  }
  add0(){
    this.Operacion = this.Operacion + "0";
  }
  add1(){
    this.Operacion = this.Operacion + "1"; 
  }
  add2(){
    this.Operacion = this.Operacion + "2";
  }
  add3(){
    this.Operacion = this.Operacion + "3"; 
  }
  add4(){
    this.Operacion = this.Operacion + "4";
  }
  add5(){
    this.Operacion = this.Operacion + "5"; 
  }
  add6(){
    this.Operacion = this.Operacion + "6";
  }
  add7(){
    this.Operacion = this.Operacion + "7"; 
  }
  add8(){
    this.Operacion = this.Operacion + "8";
  }
  add9(){
    this.Operacion = this.Operacion + "9";
  }
  resultado(){
    this.Resultado = eval(this.Operacion);
    this.Err = "";
  }
  borrar(){
    this.Operacion="";
    this.Resultado = 0;
    this.Err = "";
  }}
