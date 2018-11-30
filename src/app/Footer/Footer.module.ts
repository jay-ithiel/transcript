import { NgModule } from '@angular/core';

import { FooterComponent } from './Footer.component';
import { LogoComponent } from './Logo/Logo.component';

@NgModule({
  declarations: [
    FooterComponent,
    LogoComponent,
  ],
  exports: [FooterComponent],
})
export class FooterModule { }
