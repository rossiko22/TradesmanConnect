import { TestBed } from '@angular/core/testing';
import { LoginregisterComponent } from './loginregister.component';
describe('LoginregisterComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoginregisterComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LoginregisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
