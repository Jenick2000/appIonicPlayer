import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Howl} from 'howler';
import { SongsService} from '../service/songs.service';
import { IonRange } from '@ionic/angular';


@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.page.html',
  styleUrls: ['./play-song.page.scss'],
})
export class PlaySongPage implements OnInit {
  id: any;
  song: any;
  duration = 0;
  @ViewChild('range', {static: false}) range: IonRange;
  constructor( private activatedRoute: ActivatedRoute, private location: Location, public songsService: SongsService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.song = this.songsService.sings.find(s => s.Id === this.id);
    this.songsService.start(this.song);
    this.duration = songsService.duration; 
  } 
  
  ngOnInit() {
    
  }
  backClicked() {
    this.location.back();
  }
  togglePlay(pause) {
  this.songsService.togglePlay(pause);
  }
  next() {
    this.songsService.next();
    this.song = this.songsService.song;
  }
  prev(){
    this.songsService.prev();
    this.song = this.songsService.song;
  }
  seek(){
    let newValue = +this.range.value;
    this.songsService.seek(newValue);
  }
  volume() {
    this.songsService.volume(this.songsService.volumeValue);
  }
  // start(track){
  //   if (this.player) {
  //     this.player.stop();
  //     console.log('stop player');
  //   }
  //   this.player = new Howl({
  //     src: [track.src],
  //     autoplay: true,
  //     loop: false,
  //     volume: 0.5,
  //     onplay: () => {
  //       this.isPlaying = true;
  //       this.process = 0;
  //       this.updateProcess();
  //     },
  //     onend: () => {
  //       this.isPlaying = false;
  //     }
  //   });
  // }
  // togglePlay(pause) {
  //   this.isPlaying = !pause;

  //   if (pause) {
  //     this.player.pause();
  //   } else {
  //     this.player.play();
  //   }
  // }
  // next() {
  //   let index = this.songsService.sings.findIndex(u => u.Id === this.id);
  //   this.isPlaying = false;
  //   if ( index > 0 && index < this.songsService.sings.length - 1) {
  //    this.start(this.songsService.sings[index + 1]);
  //     this.song = this.songsService.sings[index + 1];
  //     this.id = this.song.Id;
  //   }else{
  //     this.start(this.songsService.sings[0]);
  //     this.song = this.songsService.sings[0];
  //     this.id = this.song.Id;
  //   }
  // }
  // prev() {
  //   let index = this.songsService.sings.findIndex(u => u.Id === this.id);
  //   this.isPlaying = false;
  //   if ( index > 0) {
  //     this.start(this.songsService.sings[index-1]);
  //     this.song = this.songsService.sings[index-1];
  //     this.id = this.song.Id;
  //     console.log(this.song);
  //   }else{
  //     this.start(this.songsService.sings[this.songsService.sings.length -1]);
  //     this.song = this.songsService.sings[this.songsService.sings.length -1];
  //     this.id = this.song.Id;
  //     console.log(this.song);
  //   }
  // }
  // seek() {
  //   let newValue = +this.range.value;
  //   let duration = this.player.duration();
  //   this.player.seek(duration * (newValue / 100));
  // }
  // updateProcess() {
  //   let seek =  this.player.seek();
  //   this.process = (seek / this.player.duration()) * 100 || 0 ;// run vi tri hien tai cua bai hat
  //   setTimeout(() => {this.updateProcess();}, 1000);
  // }

}
