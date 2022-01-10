import { Component, Input, OnInit } from '@angular/core';
import { CarInfo } from '../models/car-info.model';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  @Input() carInfo:CarInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
