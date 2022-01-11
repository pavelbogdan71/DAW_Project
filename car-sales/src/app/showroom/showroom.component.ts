import { Component, OnInit } from '@angular/core';
import { CarInfo } from '../models/car-info.model';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {


  cars:CarInfo[] = [
    new CarInfo('Model 3','assets/tesla_model3_info.png',"10.000$","/model3"),
    new CarInfo('Model S','assets/tesla_models_info.png',"50.000$","/models"),
    new CarInfo('Model X','assets/tesla_modelx_info.png',"80.000$","/modelx"),
    new CarInfo('Model Y','assets/tesla_modely_info.png',"100.000$","/modely")
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
