import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmPageRoutingModule } from './film-routing.module';

import { FilmPage } from './film.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmPageRoutingModule
  ],
  declarations: [FilmPage]
})
export class FilmPageModule {}
