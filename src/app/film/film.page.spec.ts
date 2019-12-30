import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmPage } from './film.page';

describe('FilmPage', () => {
  let component: FilmPage;
  let fixture: ComponentFixture<FilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
