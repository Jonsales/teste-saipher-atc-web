import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { MenuSubtituloComponent } from './menu-subtitulo/menu-subtitulo.component';
import { MenuComponent } from './menu.component';
import { MenuDropdownItemComponent } from './menu-dropdown-item/menu-dropdown-item.component';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent, MenuDropdownComponent, MenuSubtituloComponent, MenuDropdownItemComponent],
  imports: [CommonModule],
  exports: [MenuComponent]
})
export class MenuModule { }
