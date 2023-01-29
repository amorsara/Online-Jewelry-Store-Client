import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ExistClientComponent } from './Components/exist-client/exist-client.component';
import { NewClientComponent } from './Components/new-client/new-client.component';
import { OptionsComponent } from './Components/options/options.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClientsService } from './Services/clients.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { SentComponent } from './Components/sent/sent.component';
import { ViewComponent } from './Components/view/view.component';


@NgModule({
 declarations: [
    AppComponent,
    HomePageComponent,
    ExistClientComponent,
    NewClientComponent,
    OptionsComponent,
    ShoppingComponent,
    ContactComponent,
    AboutComponent,
    SentComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
