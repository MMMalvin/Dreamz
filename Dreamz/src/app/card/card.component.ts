import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  image:string = '';
  @Input()
  title:string = '';
  @Input()
  body:string = '';
  @Input()
  button:string = '';

  constructor() {}

  ngOnInit(): void {}

}
