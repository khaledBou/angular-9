import { Directive, ElementRef, HostListener, Input } from "@angular/core";
// Directive pour utiliser @Directive
// ElementRef presente l'element du DOM sur lequel on applique la directive
@Directive({
  selector: "[pkmnBorderCard]", // directive d'attribut
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number= 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string; // alias
  // @Input() pkmnBorderCard: string; // sans alias on est obligé d'utilisé le nom de la directive pour nommer la proprietés "pkmnBorderCard" qui n'a rien à voir avec borderColor

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    let border = "solid 4px " + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px";
  }
}
