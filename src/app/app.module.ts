import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SimulerAvComponent } from './simuler-av/simuler-av.component';
import { SimulerPlacementComponent } from './simuler-placement/simuler-placement.component';
import { TypeSimulateurComponent } from './type-simulateur/type-simulateur.component';
import { SimulerFcpComponent } from './simuler-fcp/simuler-fcp.component';
import { SimulerEpargneDiasporaComponent } from './simuler-epargne-diaspora/simuler-epargne-diaspora.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {MatSliderModule,MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule,
        MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule} from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyCurrencyPipe } from './MyCurrencyPipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes =[
  {
    path: 'simulateur',
    component: TypeSimulateurComponent
  },
  {
    path: '',
    redirectTo: '/simulateur',
    pathMatch: 'full',
  },
  {
    path: 'simulateurachat',
    component: SimulerAvComponent
  },
  {
    path: 'simulateurplacement',
    component: SimulerPlacementComponent
  },
  {
    path: 'simulateurfcp',
    component: SimulerFcpComponent
  },
  {
    path: 'simulateurepargne',
    component: SimulerEpargneDiasporaComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SimulerAvComponent,
    SimulerPlacementComponent,
    TypeSimulateurComponent,
    SimulerEpargneDiasporaComponent,
    SimulerFcpComponent,
    MainNavComponent,
    MyCurrencyPipe,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    MatSliderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
