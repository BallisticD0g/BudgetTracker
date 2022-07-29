import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numInput;
  oraginNum;
  currentNum;
  percent;
  prog;
  constructor() {}
btnNew(){
  this.oraginNum = this.currentNum;
  this.currentNum = this.numInput;
  this.percent = 100;
  this.prog = 1;
}
btnAdd(){
  if(this.numInput >= this.oraginNum){
      const addDec =  this.numInput / this.currentNum;
      const addRoundDec = parseFloat(addDec.toFixed(2));
      this.percent =  Math.trunc(this.percent +addRoundDec * 100);
      this.prog = 1;
      this.currentNum = this.currentNum + this.numInput;
      console.log('total percent', this.percent + addRoundDec);
      console.log('addRoundDec', addRoundDec);
      console.log('AddPer', this.percent);
  } else{
      const addDec =  this.numInput / this.currentNum;
      const addRoundDec = parseFloat(addDec.toFixed(2));
      this.percent =  Math.trunc(this.percent +addRoundDec * 100);
      this.prog = this.prog + addRoundDec;
      this.currentNum = this.currentNum + this.numInput;
      console.log('addRoundDec', addRoundDec);
      console.log('AddPer', this.percent);
      console.log('AddProg', this.prog);
  }
}
btnSub(){
  const subDec =  this.numInput / this.currentNum;
  const subRoundDec = parseFloat(subDec.toFixed(2));
  const subProg = this.prog - subRoundDec;
  this.percent =  Math.trunc(subProg * 100);
  this.prog = subProg;
  this.currentNum = this.currentNum - this.numInput;
    console.log('subRoundDec', subRoundDec);
    console.log('SUBPer', Math.trunc(subProg * 100));
    console.log('SUBProg', this.prog);
}

}
