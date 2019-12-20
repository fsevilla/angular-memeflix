import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements AfterViewInit {

  @Input('appRole') role;

  constructor(private authService:AuthService, private elementRef:ElementRef) { }

  ngAfterViewInit() {
    const isSame = this.authService.getUser().role === this.role;
    if(!isSame) {
      this.elementRef.nativeElement.parentNode.removeChild(this.elementRef.nativeElement);
    }
  }

}
