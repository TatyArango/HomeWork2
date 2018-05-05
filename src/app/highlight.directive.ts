import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	@HostListener('mouseenter')
	onMouseEnter() {
		this.elementRef.nativeElement.style.backgroundColor = 'blue';
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.elementRef.nativeElement.style.backgroundColor = null;
	}

	constructor(public elementRef: ElementRef) {
		// this.elementRef.nativeElement.style.backgroundColor = 'blue';
	}
}
