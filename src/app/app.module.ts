import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { EducatorComponent } from './educator/educator.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbCollapseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    CarouselComponent,
    ProductComponent,
    EducatorComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
