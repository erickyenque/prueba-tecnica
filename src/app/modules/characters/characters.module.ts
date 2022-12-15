import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ListComponent } from './list/list.component';
import { MyListComponent } from './my-list/my-list.component';
import { CharactersRoutingModule } from './characters-routing.module';



@NgModule({
  declarations: [
    CharactersComponent,
    ListComponent,
    MyListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
