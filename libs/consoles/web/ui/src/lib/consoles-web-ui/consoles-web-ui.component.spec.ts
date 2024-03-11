import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsolesWebUiComponent } from './consoles-web-ui.component';

describe('ConsolesWebUiComponent', () => {
  let component: ConsolesWebUiComponent;
  let fixture: ComponentFixture<ConsolesWebUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolesWebUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsolesWebUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
