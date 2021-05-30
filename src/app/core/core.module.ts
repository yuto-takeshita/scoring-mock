import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/vendors/material/material.module';
import { PrimeNgModule } from 'src/app/core/vendors/primeng/primeng.module';
import { AsCurrencyPipe } from './pipes/as-currency';
import { AsObjectArrayPipe } from './pipes/as-object-array.pipe';
import { AsPeopleCountPipe } from './pipes/as-people-count';
import { AsPercentagePipe } from './pipes/as-percentage';
import { AsStoreCountPipe } from './pipes/as-store-count';
import { AsJstDatetimePipe } from './pipes/as-jst-datetime';
import { AsAltTextPipe } from './pipes/as-store-count copy';
import { NegativeButtonComponent } from './components/negative-button/negative-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { SubmenuButtonComponent } from './components/submenu-button/submenu-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { MessageDialog } from './components/message-dialog/message-dialog';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NegativeButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    SubmenuButtonComponent,
    AsCurrencyPipe,
    AsObjectArrayPipe,
    AsPeopleCountPipe,
    AsPercentagePipe,
    AsStoreCountPipe,
    AsJstDatetimePipe,
    AsAltTextPipe,
    MessageDialog,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    PrimeNgModule,
    MaterialModule,
  ],
  exports: [
    NegativeButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    SubmenuButtonComponent,
    AsCurrencyPipe,
    AsObjectArrayPipe,
    AsPeopleCountPipe,
    AsPercentagePipe,
    AsStoreCountPipe,
    AsJstDatetimePipe,
    AsAltTextPipe,
    PrimeNgModule,
    MaterialModule,
    AngularSvgIconModule,
    HttpClientModule,
    MessageDialog,
  ],
  entryComponents: [MessageDialog],
})
export class CoreModule {}
