import { TestBed } from '@angular/core/testing';
import { CreateServiceComponent } from './create-service.component';
describe('CreateServiceComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CreateServiceComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CreateServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
