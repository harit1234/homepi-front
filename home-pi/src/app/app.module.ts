import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


const route = [{ path : '',
  loadChildren: './dashboard/dashboard.module#DashboardModule',
}]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
