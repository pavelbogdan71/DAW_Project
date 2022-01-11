import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { Model3DetailsComponent } from './car-details/model3-details/model3-details.component';
import { ModelsDetailsComponent } from './car-details/models-details/models-details.component';
import { ModelxDetailsComponent } from './car-details/modelx-details/modelx-details.component';
import { ModelyDetailsComponent } from './car-details/modely-details/modely-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ShowroomComponent,
    CarInfoComponent,
    Model3DetailsComponent,
    ModelsDetailsComponent,
    ModelxDetailsComponent,
    ModelyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
