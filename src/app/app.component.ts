import { Component } from '@angular/core';
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
}
