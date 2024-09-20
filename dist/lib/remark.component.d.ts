import { AfterContentInit, ChangeDetectorRef, OnChanges, QueryList, TemplateRef } from '@angular/core';
import { RemarkTemplateDirective } from './remark-template.directive';
import { RemarkTemplatesService } from './remark-templates.service';
import { Processor } from 'unified';
import { Root, Node } from 'mdast';
import * as i0 from "@angular/core";
export declare class RemarkComponent implements OnChanges, AfterContentInit {
    private remarkTemplatesService;
    private cdr;
    /** The markdown string to render */
    markdown: string;
    /** A custom processor to use instead of the default `unified().user(remarkParse)` */
    processor?: Processor<Root>;
    /** Set this flag to true to display the parsed markdown tree */
    debug: boolean;
    /** Custom templates to override the default rendering components */
    templateQuery?: QueryList<RemarkTemplateDirective>;
    tree?: Node;
    get templates(): {
        [nodeType: string]: TemplateRef<any>;
    };
    set templates(value: {
        [nodeType: string]: TemplateRef<any>;
    });
    constructor(remarkTemplatesService: RemarkTemplatesService, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    updateTemplates(): void;
    getProcessor(): Processor<Root, undefined, undefined, undefined, undefined>;
    parse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemarkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RemarkComponent, "remark", never, { "markdown": { "alias": "markdown"; "required": true; }; "processor": { "alias": "processor"; "required": false; }; "debug": { "alias": "debug"; "required": false; }; }, {}, ["templateQuery"], never, false, never>;
}
