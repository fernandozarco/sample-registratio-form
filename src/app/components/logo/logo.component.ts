import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styles: ['.logo-component { text-align: center; }']
})
export class LogoComponent implements OnInit {

  @Input() customWidth: String;

  constructor() { }

  ngOnInit(): void {
  }

}
