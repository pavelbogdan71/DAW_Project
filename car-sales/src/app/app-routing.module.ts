import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Model3DetailsComponent } from './car-details/model3-details/model3-details.component';
import { ModelsDetailsComponent } from './car-details/models-details/models-details.component';
import { ModelxDetailsComponent } from './car-details/modelx-details/modelx-details.component';
import { ModelyDetailsComponent } from './car-details/modely-details/modely-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowroomComponent } from './showroom/showroom.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'showroom', component:ShowroomComponent},
  {path:'model3',component:Model3DetailsComponent},
  {path:'models',component:ModelsDetailsComponent},
  {path:'modelx',component:ModelxDetailsComponent},
  {path:'modely',component:ModelyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
