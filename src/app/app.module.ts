import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserDemoModule } from './user-demo/user-demo.module';
import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';

import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    UserDemoModule,
    AnalyticsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
