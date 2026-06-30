import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DigimonListPageComponent } from "./digimon-list-page.component";

describe("DigimonListPageComponent", () => {
  let component: DigimonListPageComponent;
  let fixture: ComponentFixture<DigimonListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigimonListPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
