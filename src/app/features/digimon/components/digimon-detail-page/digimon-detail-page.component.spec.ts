import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DigimonDetailPageComponent } from "./digimon-detail-page.component";

describe("DigimonDetailPageComponent", () => {
  let component: DigimonDetailPageComponent;
  let fixture: ComponentFixture<DigimonDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigimonDetailPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
