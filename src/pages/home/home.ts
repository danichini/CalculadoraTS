import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  test:number[];
  flag:boolean;
  numbers:number[];
  addNumber:number;
  constructor(public navCtrl: NavController) {
    this.name='Claudia';
    this.test=[1,2,5,3];
    this.flag=false;
    this.numbers=[1,2];
  }

  // ionViewDidLoad(){
  //   alert('welcome')
  // }

  

  click(){
    alert(this.name);
  }

  add(num){
    this.numbers.push(num);
    console.log(num)
  }

}
