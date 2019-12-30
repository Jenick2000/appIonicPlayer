import { Component } from '@angular/core';
import {  Router} from '@angular/router';
import { SongsService} from '../service/songs.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  dataSings = [];
  searchQuery = [];

  constructor(private router: Router, public songsService: SongsService) {
      songsService.sings.sort( (a, b) => {
      if (a.Name < b.Name) { return -1; }
      if (a.Name > b.Name) { return 1; }
      return 0;
     });
    const data = songsService.sings.reduce((r, e) => {
    // get first letter of name of current element
    const group = e.Name[0];
    // if there is no property in accumulator with this letter create it
    if (!r[group]) { r[group] = {group, children: [e]}; } else { r[group].children.push(e); }
    // return accumulator
    return r;
  }, {});
    // since data at this point is an object, to get array of values
    // we use Object.values method
    this.dataSings = Object.values(data);
  }
  phatNhac(id) {
    this.songsService.isPlayer = true;
    this.songsService.id = id;
    this.router.navigate(['play-song', id]);
  }
  prev(){
    this.songsService.prev();
  }
  next() {
    this.songsService.next();
  }
  togglePlay(pause) {
    this.songsService.togglePlay(pause);
  }
  funcSearch(e) {
    const query = e.target.value.toLowerCase();
    this.songsService.sings.forEach(item => {
      const shouldShow = this.cleanAccents(item.Name).toLowerCase().indexOf(query) > -1;
        if (shouldShow === true){
            this.searchQuery.push(item);
          }
    });
    // sap xep thu tu alphabe
    const data = this.searchQuery.reduce((r, e) => {
    const group = e.Name[0];
    if (!r[group]) { r[group] = {group, children: [e]}; } else { r[group].children.push(e); }
    return r;
    }, {});
      this.dataSings = Object.values(data);
      this.searchQuery = [];
  }

  // ham xoa dau trong tieng viet
   cleanAccents = (str: string): string => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Combining Diacritical Marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, hỏi, ngã, nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)

    return str;
}

}
