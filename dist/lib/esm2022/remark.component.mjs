import { ChangeDetectionStrategy, Component, ContentChildren, Input } from '@angular/core';
import { RemarkTemplateDirective } from './remark-template.directive';
import { RemarkTemplatesService } from './remark-templates.service';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import * as i0 from "@angular/core";
import * as i1 from "./remark-templates.service";
import * as i2 from "@angular/common";
import * as i3 from "./remark-node.component";
export class RemarkComponent {
    get templates() {
        return this.remarkTemplatesService.templates;
    }
    set templates(value) {
        this.remarkTemplatesService.templates = value;
    }
    constructor(remarkTemplatesService, cdr) {
        this.remarkTemplatesService = remarkTemplatesService;
        this.cdr = cdr;
        /** Set this flag to true to display the parsed markdown tree */
        this.debug = false;
    }
    ngOnChanges() {
        if (this.templates) {
            this.parse();
        }
    }
    ngAfterContentInit() {
        this.templateQuery?.changes.subscribe(() => this.updateTemplates());
        this.updateTemplates();
    }
    updateTemplates() {
        this.templates = {};
        this.templateQuery?.forEach(template => this.templates[template.nodeType] = template.template);
        this.parse();
    }
    getProcessor() {
        return this.processor ?? unified().use(remarkParse);
    }
    parse() {
        const processor = this.getProcessor();
        const tree = processor.parse(this.markdown);
        this.tree = processor.runSync(tree);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkComponent, deps: [{ token: i1.RemarkTemplatesService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RemarkComponent, selector: "remark", inputs: { markdown: "markdown", processor: "processor", debug: "debug" }, providers: [RemarkTemplatesService], queries: [{ propertyName: "templateQuery", predicate: RemarkTemplateDirective }], usesOnChanges: true, ngImport: i0, template: `
    <remark-node *ngIf="tree && templates" [remarkNode]="tree"></remark-node>
    <pre *ngIf="debug"><code>{{tree | json }}</code></pre>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.RemarkNodeComponent, selector: "remark-node, [remarkNode]", inputs: ["remarkNode"] }, { kind: "pipe", type: i2.JsonPipe, name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'remark',
                    template: `
    <remark-node *ngIf="tree && templates" [remarkNode]="tree"></remark-node>
    <pre *ngIf="debug"><code>{{tree | json }}</code></pre>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [RemarkTemplatesService]
                }]
        }], ctorParameters: () => [{ type: i1.RemarkTemplatesService }, { type: i0.ChangeDetectorRef }], propDecorators: { markdown: [{
                type: Input,
                args: [{ required: true }]
            }], processor: [{
                type: Input
            }], debug: [{
                type: Input
            }], templateQuery: [{
                type: ContentChildren,
                args: [RemarkTemplateDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtYXJrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvcmVtYXJrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDbkssT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBYSxNQUFNLFNBQVMsQ0FBQztBQUM3QyxPQUFPLFdBQVcsTUFBTSxjQUFjLENBQUM7Ozs7O0FBWXZDLE1BQU0sT0FBTyxlQUFlO0lBYzFCLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBRUQsWUFDVSxzQkFBOEMsRUFDOUMsR0FBc0I7UUFEdEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5CaEMsZ0VBQWdFO1FBQ3ZELFVBQUssR0FBRyxLQUFLLENBQUM7SUFtQm5CLENBQUM7SUFFTCxXQUFXO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUN6QixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQ25FLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEtBQUs7UUFDSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs4R0F2RFUsZUFBZTtrR0FBZixlQUFlLDJHQUZmLENBQUMsc0JBQXNCLENBQUMsd0RBV2xCLHVCQUF1QixrREFoQjlCOzs7R0FHVDs7MkZBSVUsZUFBZTtrQkFUM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFOzs7R0FHVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BDOzJIQUcwQixRQUFRO3NCQUFoQyxLQUFLO3VCQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQztnQkFFZCxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFJTixhQUFhO3NCQURaLGVBQWU7dUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIE9uQ2hhbmdlcywgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVtYXJrVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3JlbWFyay10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmVtYXJrVGVtcGxhdGVzU2VydmljZSB9IGZyb20gJy4vcmVtYXJrLXRlbXBsYXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IHVuaWZpZWQsIFByb2Nlc3NvciB9IGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSc7XG5pbXBvcnQgeyBSb290LCBOb2RlIH0gZnJvbSAnbWRhc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZW1hcmsnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxyZW1hcmstbm9kZSAqbmdJZj1cInRyZWUgJiYgdGVtcGxhdGVzXCIgW3JlbWFya05vZGVdPVwidHJlZVwiPjwvcmVtYXJrLW5vZGU+XG4gICAgPHByZSAqbmdJZj1cImRlYnVnXCI+PGNvZGU+e3t0cmVlIHwganNvbiB9fTwvY29kZT48L3ByZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1JlbWFya1RlbXBsYXRlc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlbWFya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKiBUaGUgbWFya2Rvd24gc3RyaW5nIHRvIHJlbmRlciAqL1xuICBASW5wdXQoe3JlcXVpcmVkOiB0cnVlfSkgbWFya2Rvd24hOiBzdHJpbmc7XG4gIC8qKiBBIGN1c3RvbSBwcm9jZXNzb3IgdG8gdXNlIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgYHVuaWZpZWQoKS51c2VyKHJlbWFya1BhcnNlKWAgKi9cbiAgQElucHV0KCkgcHJvY2Vzc29yPzogUHJvY2Vzc29yPFJvb3Q+O1xuICAvKiogU2V0IHRoaXMgZmxhZyB0byB0cnVlIHRvIGRpc3BsYXkgdGhlIHBhcnNlZCBtYXJrZG93biB0cmVlICovXG4gIEBJbnB1dCgpIGRlYnVnID0gZmFsc2U7XG5cbiAgLyoqIEN1c3RvbSB0ZW1wbGF0ZXMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgcmVuZGVyaW5nIGNvbXBvbmVudHMgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihSZW1hcmtUZW1wbGF0ZURpcmVjdGl2ZSlcbiAgdGVtcGxhdGVRdWVyeT86IFF1ZXJ5TGlzdDxSZW1hcmtUZW1wbGF0ZURpcmVjdGl2ZT47XG5cbiAgdHJlZT86IE5vZGU7XG5cbiAgZ2V0IHRlbXBsYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1hcmtUZW1wbGF0ZXNTZXJ2aWNlLnRlbXBsYXRlcztcbiAgfVxuXG4gIHNldCB0ZW1wbGF0ZXModmFsdWUpIHtcbiAgICB0aGlzLnJlbWFya1RlbXBsYXRlc1NlcnZpY2UudGVtcGxhdGVzID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbWFya1RlbXBsYXRlc1NlcnZpY2U6IFJlbWFya1RlbXBsYXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYodGhpcy50ZW1wbGF0ZXMpIHtcbiAgICAgIHRoaXMucGFyc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZVF1ZXJ5Py5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVRlbXBsYXRlcygpKTtcbiAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlcygpO1xuICB9XG5cbiAgdXBkYXRlVGVtcGxhdGVzKCkge1xuICAgIHRoaXMudGVtcGxhdGVzID0ge307XG4gICAgdGhpcy50ZW1wbGF0ZVF1ZXJ5Py5mb3JFYWNoKFxuICAgICAgdGVtcGxhdGUgPT4gdGhpcy50ZW1wbGF0ZXMhW3RlbXBsYXRlLm5vZGVUeXBlXSA9IHRlbXBsYXRlLnRlbXBsYXRlXG4gICAgKTtcbiAgICB0aGlzLnBhcnNlKCk7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yID8/IHVuaWZpZWQoKS51c2UocmVtYXJrUGFyc2UpO1xuICB9XG5cbiAgcGFyc2UoKSB7XG4gICAgY29uc3QgcHJvY2Vzc29yID0gdGhpcy5nZXRQcm9jZXNzb3IoKTtcbiAgICBjb25zdCB0cmVlID0gcHJvY2Vzc29yLnBhcnNlKHRoaXMubWFya2Rvd24pO1xuICAgIHRoaXMudHJlZSA9IHByb2Nlc3Nvci5ydW5TeW5jKHRyZWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==