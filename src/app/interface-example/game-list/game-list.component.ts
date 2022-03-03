import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGame } from '../game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  pageTitle = 'Dynamic! Game List';
  imageWidth = 45;
  imageMargin = 1;
  showImage = true;
  listItem = 'Mario';
  //use of Interface:
  @Input() games: IGame[]= [];

  constructor() { }

  ngOnInit(): void {
    this.games= [
      {
        gameId: 1,
        gameName: "Fortnite",
        gameCode: "AAA-102022",
        releaseDate: "10-12-2022",
        price: 10,
        description: "Best game award",
        thumbRating: 4,
        imageUrl: "http://",
        comment:""
      },
      {
        gameId: 2,
        gameName: "Mass Effect",
        gameCode: "AAA-102022",
        releaseDate: "10-12-2022",
        price: 10,
        description: "Best game award",
        thumbRating: 4,
        imageUrl: "http://",
        comment:""
      }
    ];
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
    // The games array now has a specific data type of IGame.
    // What that means is that the data that populates that array must exactly match the properties set forth in the Interface which we created first.
    // In other words, the array of games in now strongly typed. Our IDE should notify us if we are missing anything or if there is a misspelling. Let’s test that out.




    // Interfaces are used to define custom types such as the IGame interface we created above
    // Interfaces promote strong typing in an Angular Application
    // Define an interface using the interface keyword
    // Ensure to use the export keyword when creating an interface
    // In the interface body, define the needed properties, methods, and types
    // Implement an interface on a class with the implements keyword
    // Write the needed code for every property and method defined in the interface
    // Use an interface as a data type by writing the name of the interface after a colon like so – games: IGame[] = []


}

@Output() insertedInput = new EventEmitter();
@Output() commentEvent = new EventEmitter();

@Output() callParentMethod: EventEmitter<any> = new EventEmitter<any>();

valeur_input(event : any){
  this.insertedInput.emit(event);
}
valeur_commentaire(event : any){
  this.commentEvent.emit(event);
}

callParent(){
  this.callParentMethod.emit();
}

//Call a parent method that shows alert:
showAlert(){
  this.callParentMethod.emit();
}

}
