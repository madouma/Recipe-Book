import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[rbDropdown]'
})

export class DropdownDirective {

    constructor(private elmRef: ElementRef, private renderer: Renderer) { }

    @HostListener('click') onClick() {
        this.toggleDropdown(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.toggleDropdown(false);
    }    

    private toggleDropdown(isOpen: boolean) {
        this.renderer.setElementClass(this.elmRef.nativeElement, 'open', isOpen ? true : false);
    }
}
