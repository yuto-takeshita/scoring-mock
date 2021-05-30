import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  exports: [TableModule, SliderModule, DropdownModule, MultiSelectModule]
})
export class PrimeNgModule { }
