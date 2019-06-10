import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

//material
import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

//routers
import { Routing } from './app.routes';

//services
import { HttpService } from './services/http.service';
import {FormService} from './services/form.service';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CancionesComponent } from './components/music/canciones/canciones.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CancionesComponent,
    TarjetasComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CdkTableModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [HttpService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
