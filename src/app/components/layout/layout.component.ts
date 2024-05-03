import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuOption } from '../../entity/menuOption/menu-option';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isOpen=true;

  menuOption:Array<MenuOption>=[
    {nombre:"Prestamos Activos",url:"/main"},
    {nombre:"Crear prestamo",url:"/create"}
  ]
  
  setCssClassActive(css:string){
    return css+(this.isOpen ? "":" active")
  }

}
