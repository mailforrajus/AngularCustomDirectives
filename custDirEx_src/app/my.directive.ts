import { Directive,
         ElementRef,
         HostListener,
         Input } from "@angular/core";
@Directive({
    selector:"[myDir]"
})         
export class MyDirective{
    @Input() var_one;
    @Input() var_two;
    constructor(private _el:ElementRef){}
    public hiliteColor(color){
        this._el.nativeElement.style.backgroundColor = color;
    }
    @HostListener("mouseenter") onmouseenter(){
        this.hiliteColor(this.var_one);
    };
    @HostListener("mouseleave") onmouseleave(){
        this.hiliteColor(this.var_two);
    };
}