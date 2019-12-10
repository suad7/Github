import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HomePipe } from './home.pipe';

//import { AppRoutingModule } from './app-routing.module';
// import { GithubService} from './github.service.service';
 

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    HomePipe,

  ],
  
  imports: [
    BrowserModule,
   // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // GithubService

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
