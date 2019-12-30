import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaySongPage } from './play-song.page';

describe('PlaySongPage', () => {
  let component: PlaySongPage;
  let fixture: ComponentFixture<PlaySongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaySongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
