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
import { ScrollComponent } from 'src/shared/components/scroll/scroll.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    PrivacyComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ScrollComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [    
    AuthService,

],
  bootstrap: [AppComponent]
})
export class AppModule { }
