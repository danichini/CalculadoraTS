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
  regexp = new RegExp(/[-+*\/.]{2}/g);
  regPunto = new RegExp(/[0-9]+[.]+[0-9]+[.]/g);

  constructor(public navCtrl: NavController) {
    this.Operacion="";
  }
  addPunto(){
    const isExisting = this.regexp.test(this.Operacion);
    const isDotExisting = this.regPunto.test(this.Operacion);
    console.log(this.Operacion);
    
    if (isExisting === false) {
      this.save = this.Operacion;
      this.Operacion = this.Operacion + "."; 
      const isExisting = this.regexp.test(this.Operacion);
      const isDotExisting = this.regPunto.test(this.Operacion);
      if (isDotExisting === true){
        this.Operacion = this.Operacion.substring(0, this.Operacion.length - 1);
      }
      if (isExisting === true) {
        this.Err = "debe agregar un numero depues de un simbolo";
        this.Operacion = this.save;
      }
    }else {
      this.Err = "debe ";
    }

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
      this.Err = "debe agregar un numero depues de un simbolo";
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
      this.Err = "debe agregar un numero depues de un simbolo";
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
      this.Err = "debe agregar un numero depues de un simbolo";
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
      this.Err = "debe agregar un numero depues de un simbolo";
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
      let a = this.Operacion.charAt(this.Operacion.length-1);
  switch (a) {
      case '+':
        this.Operacion = this.Operacion.substring(0, this.Operacion.length - 1);
          break;
      case '-':  
        this.Operacion = this.Operacion.substring(0, this.Operacion.length - 1);
          break;
      case '*': 
        this.Operacion = this.Operacion.substring(0, this.Operacion.length - 1);
          break;
      case '/':
        this.Operacion = this.Operacion.substring(0, this.Operacion.length - 1);
          break;    
      default:
        let b = this.Operacion.charAt(0);
      switch (b) {
        case '+':
          this.Operacion = this.Operacion.substr(1);
            break;
        case '-':  
          this.Operacion = this.Operacion.substr(1);
            break;
        case '*': 
          this.Operacion = this.Operacion.substr(1);
            break;
        case '/':
          this.Operacion = this.Operacion.substr(1);
            break;    
        default:
          this.Operacion = eval(this.Operacion);
          this.Operacion = this.Operacion + "";
          this.Err = "";
          console.log(this.Operacion);
          
          if(this.Operacion === undefined) {
            this.Operacion = "";
            this.Err = "Campo Vacio"
          }
    }}
  
  }
  backspace(){
    this.Operacion = this.Operacion.substring(0, this.Operacion.length - 1);
  }
  borrar(){
    this.Operacion="";
    this.Err = "";
  }}

  