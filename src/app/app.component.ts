import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  Name:string;
  lastName:string;
  title:string;

  showTitle:boolean=false;

  display(fName, lName) {
    this.showTitle=true;
    this.title = `${fName.value} ${lName.value}`;
  }
  
}
