import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../environments/environment';

import { IGame } from './interface-example/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharing-data';

  id_of_input : number = 0;
  comment : string = "";
  // games_in_parent: IGame[]= [
  //   {
  //     gameId: 1,
  //     gameName: "Fortnite",
  //     gameCode: "AAA-102022",
  //     releaseDate: "10-12-2022",
  //     price: 10,
  //     description: "Best game award",
  //     thumbRating: 4,
  //     imageUrl: "http://",
  //     comment:""
  //   },
  //   {
  //     gameId: 2,
  //     gameName: "Mass Effect",
  //     gameCode: "AAA-102022",
  //     releaseDate: "10-12-2022",
  //     price: 10,
  //     description: "Best game award",
  //     thumbRating: 4,
  //     imageUrl: "http://",
  //     comment:""
  //   },
  //   {
  //     gameId: 3,
  //     gameName: "Rush Hour",
  //     gameCode: "AAA-102022",
  //     releaseDate: "10-12-2022",
  //     price: 10,
  //     description: "All player",
  //     thumbRating: 5,
  //     imageUrl: "http://",
  //     comment:"One of the best...."
  //   }
  // ];

  getIdValue(event : any){
    this.id_of_input = event;
  }

  getComment(event : any){
    this.comment = event; //l'event c'est le commentaire inséré dans input dans app-item
  }

  //Clique à partir de component enfant:
  callParent(){
    alert('Clique à partir de component enfant item-game');
  }

  ngOnInit(){

  }

  constructor(private router: Router){

  }

  //open link in new Tab
  openNewTab()
  {
    const link = ['child'];
    this.router.navigate(link);

    //Open New tab
    //window.open('/parent','_blank');

  }

  value : string ="test";
  num: string="";
  cle:string ="";
  secu: string="177059911405107";
  NB_CARACTERES : number=13;
  removeCharacter(value: string){
    //Remove the all characters before 0 index and all after 2 index : for example
    this.value = value.slice(0, 2);
    //value.substring()

    //Remove
    //this.value = value.slice(0, value.length - 1);
  }

  //Calculer cle et numerp à partir de Num Secu : 177059911405107:
  calculer(){
    //this.cle = this.secu.slice(this.NB_CARACTERES,15);
    this.cle= this.secu.slice(this.NB_CARACTERES);
    this.num= this.secu.slice(0,this.NB_CARACTERES);
  }

  //Test if character is letter or number:
  resultat !: boolean;
  isCharacterALetter(char : any) {

    this.resultat = (/^[a-zA-Z]+$/).test(char);
    return this.resultat;
  }

 //Convert string characters to ASCII numbers.
 res : number=0;
 convertCharactertoASCII(char: string): number {

  if(this.isCharacterALetter(char)){
    this.res = char.charCodeAt(0); //characters to ASCII numbers.
    return this.res;
  }else return 0;

}
  //For opposite use String.fromCharCode(10) that convert numbers to equal ASCII character For example:
  //String.fromCharCode(65,66,67); // returns 'ABC'


  removeSpace(strNumero : string){
    strNumero = strNumero.toUpperCase();
        strNumero = strNumero.replace(/\s/g, '');//Remove empty space
        //let regINSEE = /[^A-Z0-9_]/;
        //strNumero = regINSEE. Replace(strNumero, "");

    this.value =strNumero;
  }

  //ENVIRONMENT EXAMPLE////////////////////////////////
  env :any= environment;

}
