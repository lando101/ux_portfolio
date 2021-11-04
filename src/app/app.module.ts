import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './pages/home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyCEd0Nl9euG-vL_fw_Yte8YmDxSndH3bd0',
  authDomain: 'ux-portfolio-8fc64.firebaseapp.com',
  projectId: 'ux-portfolio-8fc64',
  storageBucket: 'ux-portfolio-8fc64.appspot.com',
  messagingSenderId: '764570198172',
  appId: '1:764570198172:web:d6a8ba4e3917c610784d59',
  measurementId: 'G-0BPLNMY9B4',
};

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule,
    ShellModule,
    HomeModule,
    // MaterialModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
