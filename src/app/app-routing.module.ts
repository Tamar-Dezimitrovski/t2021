import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './component/board/board.component';

const routes: Routes = [
  { path: '', component: BoardComponent, pathMatch: 'full' },
  { path: '**', component: BoardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
