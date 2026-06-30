import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DigimonDetailCardComponent } from "./digimon-detail-card.component";

describe("DigimonDetailCardComponent", () => {
  let component: DigimonDetailCardComponent;
  let fixture: ComponentFixture<DigimonDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonDetailCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigimonDetailCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
