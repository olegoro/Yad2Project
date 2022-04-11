import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAssetComponent } from './publish-asset.component';

describe('PublishAssetComponent', () => {
  let component: PublishAssetComponent;
  let fixture: ComponentFixture<PublishAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
