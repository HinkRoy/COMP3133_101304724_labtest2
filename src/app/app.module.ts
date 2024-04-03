import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import here
import { AppComponent } from './app.component';
// Import your components and services

@NgModule({
  declarations: [
    AppComponent,
    // Add your components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Include it in imports array
    // Other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }