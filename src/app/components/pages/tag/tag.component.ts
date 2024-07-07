import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../shared/model/Tag';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Or a specific module
})


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
   }

  ngOnInit(): void {
  }

}