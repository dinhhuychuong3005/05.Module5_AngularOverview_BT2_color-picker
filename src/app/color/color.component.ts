import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color?: string;

  constructor() {
    this.color = 'red'
  }
  changeColor(color : string) {
    this.color = color;
  }

  ngOnInit(): void {
  }

}
