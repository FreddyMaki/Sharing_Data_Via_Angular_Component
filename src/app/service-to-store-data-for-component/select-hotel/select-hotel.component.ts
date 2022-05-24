import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.scss']
})
export class SelectHotelComponent implements OnInit {

  constructor(public hotelService: HotelService, public router: Router) { }

  ngOnInit(): void {
    // this.hotelService.selectedHotel ={Name: "Hotel 5 etoiles", Id: "1"};
  }

  goToNext(){
    //Select hotel:
    this.hotelService.selectedHotel ={Name: "Hotel 5 etoiles", Id: "1"};
    this.router.navigate(['room']);
  }

}
