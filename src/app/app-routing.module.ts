import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistClientComponent } from './Components/exist-client/exist-client.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NewClientComponent } from './Components/new-client/new-client.component';
import { OptionsComponent } from './Components/options/options.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { SentComponent } from './Components/sent/sent.component';
import { ViewComponent } from './Components/view/view.component';

const routes: Routes = [   {path:'homePage',component:HomePageComponent},
                           {path:'existClient',component:ExistClientComponent},
                           {path:'newClient',component:NewClientComponent},
                           {path:'options',component:OptionsComponent},
                           {path:'shopping',component:ShoppingComponent},
                           {path:'contact',component:ContactComponent},
                           {path:'about',component:AboutComponent},
                           {path:'sent',component:SentComponent},
                           {path:'imgs',component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
