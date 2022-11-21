import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitLayoutPageRoutingModule } from './split-layout-routing.module';

import { SplitLayoutPage } from './split-layout.page';
import { MapWindowComponent } from '@app/map/map-window/map-window.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitLayoutPageRoutingModule,
  ],
  declarations: [SplitLayoutPage, MapWindowComponent],
})
export class SplitLayoutPageModule {}
