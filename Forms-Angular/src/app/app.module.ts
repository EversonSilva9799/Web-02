import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
	declarations: [ AppComponent, SignupComponent ],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
