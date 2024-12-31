import { TestBed } from '@angular/core/testing';
import { ChooselanguageComponent } from './chooselanguage.component';
describe('ChooselanguageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChooselanguageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ChooselanguageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
