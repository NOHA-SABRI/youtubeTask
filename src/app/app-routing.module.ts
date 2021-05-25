import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsScreenComponent } from './components/details-screen/details-screen.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';

const routes: Routes = [
  {path:'Home',component:HomeScreenComponent},
  {path:'VideoDetails/:videoID',component:DetailsScreenComponent},
 
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
