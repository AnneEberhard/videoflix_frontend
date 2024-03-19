import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { FooterComponent } from 'src/shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    PrivacyComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
