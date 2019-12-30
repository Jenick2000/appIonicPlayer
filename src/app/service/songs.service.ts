import { Injectable } from '@angular/core';
import {Howl} from 'howler';
@Injectable({
  providedIn: 'root'
})
export class SongsService {
  isPlayer = false;
  player: Howl = null;
  isPlaying = false;
  id;
  song: any;
  process = 0;
  duration: any;
  currentTime: any;
  volumeValue = 70;

  sings = [
    {
        Id: "1412134502",
        Name: 'Anh Còn Nợ Em',
        Singer: 'Đàm Vĩnh Hưng',
        content:'Anh còn nợ em, Công viên ghế đá,Công viên ghế đá, Lá đổ chiều mưa',
        src: './assets/mp3/Anh-Con-No-Em-Dam-Vinh-Hung.mp3',
        image: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_4.jpg'
    },
    {
        Id: '1412134520',
        Name: 'Sóng gió',
        Singer: 'Jack - K_ICM',
        content: 'Hồng trần trên đôi cánh tay,Họa đời em trong phút giây,Từ ngày thơ ấy còn ngủ mơ đến khi em thờ ơ,Lòng người anh đâu có hay,Một ngày khi vỗ cánh bay,Từ người yêu hóa thành người dưng đến khi ta tự xưng à,Thương em bờ vai nhỏ nhoi,Đôi mắt hóa mây đêm,Thương sao mùi dạ lý hương,Vương vấn mãi bên thềm,Đời phiêu du cố tìm một người thật lòng,Dẫu trời mênh mông anh nhớ em,Chim kia về vẫn có đôi,Sao chẳng số phu thê?,Em ơi đừng xa cách tôi,Trăng cố níu em về,Bình yên trên mái nhà,Nhìn đời ngược dòng,Em còn bên anh có phải không?,Trời ban ánh sáng, năm tháng tư bề',
        image: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_2.jpg',
        src: '../assets/mp3/Song-Gio-Jack-K-ICM.mp3'
    },
    {
        Id: '1412145502',
        Name: 'Mỹ Nhân',
        Singer: 'Đinh Đại Vũ',
        content: 'Mỹ Nhân ơi xinh đẹp tuyệt trần ,muốn theo em đi đến chân trời',
        src: 'https://firebasestorage.googleapis.com/v0/b/message-6c6fa.appspot.com/o/music%2FMy-Nhan-Dinh-Dai-Vu.mp3?alt=media&token=afdc5698-93bc-4c6c-8958-202bc288b110', //'../assets/mp3/My-Nhan-Dinh-Dai-Vu.mp3',
        image: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_3.jpg'
    },
    {
        Id: '1412144501',
        Name: 'Gặp Nhau Trong Rùng Mơ',
        Singer: 'Trọng Tấn, Tân Nhàn',
        content: 'Anh còn nợ em,Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa',
        image: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg',
        src: '../assets/mp3/Gap-Nhau-Trong-Rung-Mo-Tan-Nhan-Trong-Tan.mp3'
    },
    {
        Id: '1412143332',
        Name: 'Đắp Mộ Cuộc Tình',
        Singer: 'Đan Nguyên',
        content: 'Anh còn nợ em, Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa',
        image: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_5.jpg',
        src: '../assets/mp3/Dap-Mo-Cuoc-Tinh-Le-Sang.mp3'
    },
    {
      Id: '1412143333',
      Name: 'Em Ơi Lên Phố',
      Singer: 'Minh Vương M4U',
      content: 'Anh đã chạy theo đến tàn kiệt ngày kiếp này mà sao em vẫn lên phố',
      image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/9/b/5/b9b5e03b6e5455a6a24a02cae3a14d3f.jpg',
      src: '../assets/mp3/Em-Oi-Len-Pho-Minh-Vuong-M4U.mp3',
    },
    {
      Id: '1412143334',
      Name: 'Phố Đêm',
      Singer: 'Dương Hồng Loan',
      content: 'Phố đêm lalalalal',
      image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/0/d/0d5b1c4c7f720f698946c7f6ab08f687_1425889433.jpg',
      src: '../assets/mp3/Pho-Dem-Duong-Hong-Loan.mp3',
    }
  ];
  constructor() {  
  }
  start(track){
    this.song = this.sings.find(s => s.Id === this.id);
    console.log('song service');
    console.log(this.song);
    if (this.player) {
      this.player.stop();
      console.log('stop player');
    }
    this.player = new Howl({
      src: [track.src],
      html5: true,
      autoplay: true,
      loop: false,
      volume: this.volumeValue / 100,
      onplay: () => {
        this.isPlaying = true;
        this.process = 0;
        this.updateProcess();
        this.formatTime(this.player.duration())
      },
      onend: () => {
        this.isPlaying = false;
        this.next();
      }
    });
    
  }
  formatTime(secs) {
    secs=Math.floor(secs);
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;
    this.duration = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  formatCurrentTime(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;
    this.currentTime = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  togglePlay(pause) {
    this.isPlaying = !pause;

    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }
  next() {
    let index = this.sings.findIndex(u => u.Id === this.id);
    this.isPlaying = false;
    if ( index >= 0 && index < this.sings.length - 1) {
     this.start(this.sings[index + 1]);
      this.song = this.sings[index + 1];
      this.id = this.song.Id;
    }else{
      this.start(this.sings[0]);
      this.song = this.sings[0];
      this.id = this.song.Id;
    }
  }
  prev() {
    let index = this.sings.findIndex(u => u.Id === this.id);
    this.isPlaying = false;
    if ( index > 0) {
      this.start(this.sings[index-1]);
      this.song = this.sings[index-1];
      this.id = this.song.Id;
      console.log(this.song);
    }else{
      this.start(this.sings[this.sings.length -1]);
      this.song = this.sings[this.sings.length -1];
      this.id = this.song.Id;
      console.log(this.song);
    }
  }
  seek(newValue) {
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }
  updateProcess() {
    let seek =  this.player.seek();
     this.formatCurrentTime(Math.floor(seek));
    this.process = (seek / this.player.duration()) * 100 || 0 ;// run vi tri hien tai cua bai hat
    setTimeout(() => {this.updateProcess();this.currentTime}, 1000);
  }
  volume(newValue) {
    let vl = newValue/100;
    this.player.volume(vl);
    this.volumeValue = newValue;
  }
}
