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
import { VideoComponent } from './video/video.component';
import { BackendService } from 'src/shared/services/backend.service';

import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AuthInterceptor } from 'src/shared/services/auth-interceptor.service';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { FilterByTitlePipe } from './main/filter-by-title.pipe';

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
    VideoComponent,
    ConfirmationComponent,
    ForgotComponent,
    ResetComponent,
    FilterByTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [    
    AuthService,
    BackendService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
