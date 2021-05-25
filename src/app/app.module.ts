import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DetailsScreenComponent } from './components/details-screen/details-screen.component'
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    DetailsScreenComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    
   
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
