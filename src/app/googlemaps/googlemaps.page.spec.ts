import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GooglemapsPage } from './googlemaps.page';

describe('GooglemapsPage', () => {
  let component: GooglemapsPage;
  let fixture: ComponentFixture<GooglemapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GooglemapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
