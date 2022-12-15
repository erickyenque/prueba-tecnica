import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MyListComponent } from './my-list/my-list.component';

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'my-list', component: MyListComponent },
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}