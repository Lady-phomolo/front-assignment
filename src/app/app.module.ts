import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListCicComponent } from './components/list-cic/list-cic.component';
import { CicFormComponent } from './components/cic-form/cic-form.component';
import {CicService} from './shared-service/cic.service';



const apRoutes:Routes =[
    {path:'',component:ListCicComponent},
    {path:'op',component:CicFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListCicComponent,
    CicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(apRoutes)
  ],
  providers: [CicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
