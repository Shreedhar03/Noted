import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showToolTip:boolean = false
  logoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4l7-sY2xGXsYBW8UISHgxNw44i5DqXtbgo0mVnIp9Q&s'
  handleMouseOver(){
    this.showToolTip=true
  }
  handleMouseOut(){
    this.showToolTip=false
  }
}
