import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { OtherPageComponent } from "./other-page/other-page.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule, NavBarComponent, OtherPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myNewApp';
  isactive:boolean = false;

   myfunc() {
    this.isactive= !this.isactive;
  }
}
