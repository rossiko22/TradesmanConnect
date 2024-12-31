import { TestBed } from '@angular/core/testing';
import { ContactPageComponent } from './contact-page.component';
describe('ContactPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactPageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ContactPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
