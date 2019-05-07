import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  @Input() /* dish mora biti komponenti predat kao parametar*/
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
