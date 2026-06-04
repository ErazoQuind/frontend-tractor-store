import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VariantOption } from './variant-option';

describe('VariantOption', () => {
  let component: VariantOption;
  let fixture: ComponentFixture<VariantOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantOption],
    }).compileComponents();

    fixture = TestBed.createComponent(VariantOption);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
