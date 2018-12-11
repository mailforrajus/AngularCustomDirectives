import { Directive,
         TemplateRef,
         Input,
         ViewContainerRef } from "@angular/core";
@Directive({
    selector:"[hello]"
})  
export class StructuralDirective{
    constructor(private _templateRef:TemplateRef<any>,
                private _viewContainerRef:ViewContainerRef){}
    @Input() set hello(isHidden:boolean){
        if(isHidden){
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }else{
            this._viewContainerRef.clear();
        }
    }            
}       