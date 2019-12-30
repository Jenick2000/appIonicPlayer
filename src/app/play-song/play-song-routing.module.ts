import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaySongPage } from './play-song.page';

const routes: Routes = [
  {
    path: '',
    component: PlaySongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaySongPageRoutingModule {}
