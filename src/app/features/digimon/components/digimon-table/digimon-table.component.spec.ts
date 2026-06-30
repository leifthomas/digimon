import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { DigimonTableComponent } from "./digimon-table.component";

describe("DigimonTableComponent", () => {
  let component: DigimonTableComponent;
  let fixture: ComponentFixture<DigimonTableComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
