import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.scss']
})
export class SelectRoomComponent implements OnInit {
  userSelectedHotel:any;
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.userSelectedHotel = this.hotelService.selectedHotel;
  }

}
