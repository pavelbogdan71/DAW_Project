import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowroomComponent } from './showroom/showroom.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'showroom', component:ShowroomComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
