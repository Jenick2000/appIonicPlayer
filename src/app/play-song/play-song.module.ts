import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaySongPageRoutingModule } from './play-song-routing.module';

import { PlaySongPage } from './play-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaySongPageRoutingModule
  ],
  declarations: [PlaySongPage]
})
export class PlaySongPageModule {}
