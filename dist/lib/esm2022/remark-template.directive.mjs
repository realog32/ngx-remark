import { Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class RemarkTemplateDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.7", type: RemarkTemplateDirective, selector: "[remarkTemplate]", inputs: { nodeType: ["remarkTemplate", "nodeType"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[remarkTemplate]"
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { nodeType: [{
                type: Input,
                args: [{ required: true, alias: "remarkTemplate" }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtYXJrLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvcmVtYXJrLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFLOUQsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUNrQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUN6QyxDQUFDOzhHQUxPLHVCQUF1QjtrR0FBdkIsdUJBQXVCOzsyRkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCO2dGQUVtRCxRQUFRO3NCQUF6RCxLQUFLO3VCQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbcmVtYXJrVGVtcGxhdGVdXCJcbn0pXG5leHBvcnQgY2xhc3MgUmVtYXJrVGVtcGxhdGVEaXJlY3RpdmUge1xuICBASW5wdXQoe3JlcXVpcmVkOiB0cnVlLCBhbGlhczogXCJyZW1hcmtUZW1wbGF0ZVwifSkgbm9kZVR5cGUhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICkge31cbn1cbiJdfQ==