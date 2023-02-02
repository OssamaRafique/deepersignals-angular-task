import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeListComponent } from './pages/tree-list/tree-list.component';

const routes: Routes = [
  {
    path: '',
    component: TreeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
