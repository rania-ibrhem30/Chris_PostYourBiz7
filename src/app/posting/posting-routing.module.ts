import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostingComponent } from './posting.component';
import { DeatilsPostingComponent } from './deatils-posting/deatils-posting.component';

const routes: Routes = [
  { path: '', component: PostingComponent },
  {path:'details/:id', component:DeatilsPostingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostingRoutingModule { }
