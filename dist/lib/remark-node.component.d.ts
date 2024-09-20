import { RemarkTemplatesService } from "./remark-templates.service";
import * as i0 from "@angular/core";
export declare class RemarkNodeComponent {
    templateService: RemarkTemplatesService;
    node: any;
    constructor(templateService: RemarkTemplatesService);
    get templates(): {
        [nodeType: string]: import("@angular/core").TemplateRef<any>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<RemarkNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RemarkNodeComponent, "remark-node, [remarkNode]", never, { "node": { "alias": "remarkNode"; "required": true; }; }, {}, never, never, false, never>;
}
