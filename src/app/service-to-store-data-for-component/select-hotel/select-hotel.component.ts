import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.scss']
})
export class SelectHotelComponent implements OnInit {

  constructor(public hotelService: HotelService, private router: Router) { }

  ngOnInit(): void {
    this.hotelService.selectedHotel ={Name: "Hotel 5 etoiles", Id: "1"};
  }

  goToNext(){
    this.router.navigateByUrl('/select-room');
  }

}
