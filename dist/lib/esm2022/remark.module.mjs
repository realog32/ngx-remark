import { NgModule } from '@angular/core';
import { RemarkComponent } from './remark.component';
import { CommonModule } from '@angular/common';
import { RemarkTemplateDirective } from './remark-template.directive';
import { RemarkNodeComponent } from './remark-node.component';
import * as i0 from "@angular/core";
export class RemarkModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.7", ngImport: i0, type: RemarkModule, declarations: [RemarkComponent,
            RemarkTemplateDirective,
            RemarkNodeComponent], imports: [CommonModule], exports: [RemarkComponent,
            RemarkTemplateDirective,
            RemarkNodeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        RemarkComponent,
                        RemarkTemplateDirective,
                        RemarkNodeComponent
                    ],
                    exports: [
                        RemarkComponent,
                        RemarkTemplateDirective,
                        RemarkNodeComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtYXJrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvcmVtYXJrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBbUI5RCxNQUFNLE9BQU8sWUFBWTs4R0FBWixZQUFZOytHQUFaLFlBQVksaUJBVnJCLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsbUJBQW1CLGFBTG5CLFlBQVksYUFRWixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLG1CQUFtQjsrR0FHVixZQUFZLFlBYnJCLFlBQVk7OzJGQWFILFlBQVk7a0JBZnhCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2QixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW1hcmtDb21wb25lbnQgfSBmcm9tICcuL3JlbWFyay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlbWFya1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZW1hcmstdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlbWFya05vZGVDb21wb25lbnQgfSBmcm9tICcuL3JlbWFyay1ub2RlLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlbWFya0NvbXBvbmVudCxcbiAgICBSZW1hcmtUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBSZW1hcmtOb2RlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZW1hcmtDb21wb25lbnQsXG4gICAgUmVtYXJrVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgUmVtYXJrTm9kZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlbWFya01vZHVsZSB7IH1cbiJdfQ==