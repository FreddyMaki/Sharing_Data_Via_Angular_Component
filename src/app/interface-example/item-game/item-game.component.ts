import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGame } from '../game';

@Component({
  selector: 'app-item-game',
  templateUrl: './item-game.component.html',
  styleUrls: ['./item-game.component.scss']
})
export class ItemGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() games_dans_Item_game !: IGame;

  comment: string ="";
  @Input() id_of_input: number=0; //get the id of inserted input on ngFor

  @Output() insertedInput = new EventEmitter();
  @Output() commentEvent = new EventEmitter();


  getInputID(id_of_input: number){
    this.insertedInput.emit(id_of_input); //Envoi du commentaire dans l'event
  }


  sendComment(comment: string){
    this.commentEvent.emit(comment); //Envoi comment dans l'event
  }





}
