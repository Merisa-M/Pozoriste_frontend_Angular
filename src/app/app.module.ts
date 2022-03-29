import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GradComponent } from './grad/grad.component';
import { ZanrComponent } from './zanr/zanr.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ZanrService } from './services/zanr/zanr.service';
import { GradService } from './services/grad/grad.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GradDetaljiComponent } from './grad-detalji/grad-detalji.component';
import { ZanrDetaljiComponent } from './zanr-detalji/zanr-detalji.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GradComponent,
    ZanrComponent,
    GradDetaljiComponent,
    ZanrDetaljiComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ZanrService, GradService],
  bootstrap: [AppComponent],
})
export class AppModule {}
