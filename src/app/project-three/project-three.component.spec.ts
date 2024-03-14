import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThreeComponent } from './project-three.component';

describe('ProjectThreeComponent', () => {
  let component: ProjectThreeComponent;
  let fixture: ComponentFixture<ProjectThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
