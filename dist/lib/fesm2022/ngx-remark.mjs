import * as i0 from '@angular/core';
import { Directive, Input, Injectable, Component, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class RemarkTemplateDirective {
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

class RemarkTemplatesService {
    constructor() {
        this.templates = {};
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkTemplatesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkTemplatesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkTemplatesService, decorators: [{
            type: Injectable
        }] });

class RemarkNodeComponent {
    constructor(templateService) {
        this.templateService = templateService;
    }
    get templates() {
        return this.templateService.templates;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkNodeComponent, deps: [{ token: RemarkTemplatesService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RemarkNodeComponent, selector: "remark-node, [remarkNode]", inputs: { node: ["remarkNode", "node"] }, ngImport: i0, template: "\n<!-- For each child, display its custom template or default one -->\n<ng-container *ngFor=\"let child of node.children\">\n  <ng-container *ngTemplateOutlet=\"templates?.[child.type] ?? defaultTpl; context: { $implicit: child }\">\n  </ng-container>\n</ng-container>\n\n<ng-template #defaultTpl let-child>\n\n  <ng-container [ngSwitch]=\"child.type\">\n\n    <!-- Parents -->\n\n    <p *ngSwitchCase=\"'paragraph'\" [remarkNode]=\"child\"></p>\n\n    <ng-container *ngSwitchCase=\"'heading'\" [ngSwitch]=\"child.depth\">\n      <h1 *ngSwitchCase=\"1\" [remarkNode]=\"child\"></h1>\n      <h2 *ngSwitchCase=\"2\" [remarkNode]=\"child\"></h2>\n      <h3 *ngSwitchCase=\"3\" [remarkNode]=\"child\"></h3>\n      <h4 *ngSwitchCase=\"4\" [remarkNode]=\"child\"></h4>\n      <h5 *ngSwitchCase=\"5\" [remarkNode]=\"child\"></h5>\n      <h6 *ngSwitchCase=\"6\" [remarkNode]=\"child\"></h6>\n    </ng-container>\n\n    <blockquote *ngSwitchCase=\"'blockquote'\" [remarkNode]=\"child\"></blockquote>\n\n    <ng-container *ngSwitchCase=\"'list'\">\n      <ul *ngIf=\"!child.ordered\" [remarkNode]=\"child\"></ul>\n      <ol *ngIf=\"child.ordered\" [remarkNode]=\"child\" [start]=\"child.start\"></ol>\n    </ng-container>\n\n    <li *ngSwitchCase=\"'listItem'\" [remarkNode]=\"child\"></li>\n\n    <a *ngSwitchCase=\"'link'\" [href]=\"child.url\" [title]=\"child.title ?? ''\" [remarkNode]=\"child\"></a>\n\n    <em *ngSwitchCase=\"'emphasis'\" [remarkNode]=\"child\"></em>\n\n    <strong *ngSwitchCase=\"'strong'\" [remarkNode]=\"child\"></strong>\n\n    <del *ngSwitchCase=\"'delete'\" [remarkNode]=\"child\"></del>\n\n    <section *ngSwitchCase=\"'footnotes'\" class=\"footnotes\" [remarkNode]=\"child\"></section>\n\n    <table *ngSwitchCase=\"'table'\" [remarkNode]=\"child\"></table>\n\n    <tr *ngSwitchCase=\"'tableRow'\" [remarkNode]=\"child\"></tr>\n\n    <td *ngSwitchCase=\"'tableCell'\" [remarkNode]=\"child\"></td>\n\n\n    <!-- Literals -->\n\n    <code *ngSwitchCase=\"'inlineCode'\">{{ child.value }}</code>\n\n    <pre *ngSwitchCase=\"'code'\" [ngClass]=\"child.lang\"><code>{{ child.value }}</code></pre>\n\n    <div *ngSwitchCase=\"'html'\" [innerHTML]=\"child.value\"></div>\n\n    <ng-container *ngSwitchCase=\"'text'\">{{ child.value }}</ng-container>\n\n    <!-- Nodes -->\n\n    <sup *ngSwitchCase=\"'footnoteReference'\" class=\"footnote-ref\"><a [href]=\"'#'+child.identifier\">{{child.label}}</a></sup>\n\n    <img *ngSwitchCase=\"'image'\" [src]=\"child.url\" [alt]=\"child.alt ?? ''\" [title]=\"child.title ?? ''\" />\n\n    <hr *ngSwitchCase=\"'thematicBreak'\" />\n\n    <br *ngSwitchCase=\"'break'\">\n\n    <b *ngSwitchDefault>Unknown node type: {{ child.type }}</b>\n\n  </ng-container>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: RemarkNodeComponent, selector: "remark-node, [remarkNode]", inputs: ["remarkNode"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkNodeComponent, decorators: [{
            type: Component,
            args: [{ selector: "remark-node, [remarkNode]", changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<!-- For each child, display its custom template or default one -->\n<ng-container *ngFor=\"let child of node.children\">\n  <ng-container *ngTemplateOutlet=\"templates?.[child.type] ?? defaultTpl; context: { $implicit: child }\">\n  </ng-container>\n</ng-container>\n\n<ng-template #defaultTpl let-child>\n\n  <ng-container [ngSwitch]=\"child.type\">\n\n    <!-- Parents -->\n\n    <p *ngSwitchCase=\"'paragraph'\" [remarkNode]=\"child\"></p>\n\n    <ng-container *ngSwitchCase=\"'heading'\" [ngSwitch]=\"child.depth\">\n      <h1 *ngSwitchCase=\"1\" [remarkNode]=\"child\"></h1>\n      <h2 *ngSwitchCase=\"2\" [remarkNode]=\"child\"></h2>\n      <h3 *ngSwitchCase=\"3\" [remarkNode]=\"child\"></h3>\n      <h4 *ngSwitchCase=\"4\" [remarkNode]=\"child\"></h4>\n      <h5 *ngSwitchCase=\"5\" [remarkNode]=\"child\"></h5>\n      <h6 *ngSwitchCase=\"6\" [remarkNode]=\"child\"></h6>\n    </ng-container>\n\n    <blockquote *ngSwitchCase=\"'blockquote'\" [remarkNode]=\"child\"></blockquote>\n\n    <ng-container *ngSwitchCase=\"'list'\">\n      <ul *ngIf=\"!child.ordered\" [remarkNode]=\"child\"></ul>\n      <ol *ngIf=\"child.ordered\" [remarkNode]=\"child\" [start]=\"child.start\"></ol>\n    </ng-container>\n\n    <li *ngSwitchCase=\"'listItem'\" [remarkNode]=\"child\"></li>\n\n    <a *ngSwitchCase=\"'link'\" [href]=\"child.url\" [title]=\"child.title ?? ''\" [remarkNode]=\"child\"></a>\n\n    <em *ngSwitchCase=\"'emphasis'\" [remarkNode]=\"child\"></em>\n\n    <strong *ngSwitchCase=\"'strong'\" [remarkNode]=\"child\"></strong>\n\n    <del *ngSwitchCase=\"'delete'\" [remarkNode]=\"child\"></del>\n\n    <section *ngSwitchCase=\"'footnotes'\" class=\"footnotes\" [remarkNode]=\"child\"></section>\n\n    <table *ngSwitchCase=\"'table'\" [remarkNode]=\"child\"></table>\n\n    <tr *ngSwitchCase=\"'tableRow'\" [remarkNode]=\"child\"></tr>\n\n    <td *ngSwitchCase=\"'tableCell'\" [remarkNode]=\"child\"></td>\n\n\n    <!-- Literals -->\n\n    <code *ngSwitchCase=\"'inlineCode'\">{{ child.value }}</code>\n\n    <pre *ngSwitchCase=\"'code'\" [ngClass]=\"child.lang\"><code>{{ child.value }}</code></pre>\n\n    <div *ngSwitchCase=\"'html'\" [innerHTML]=\"child.value\"></div>\n\n    <ng-container *ngSwitchCase=\"'text'\">{{ child.value }}</ng-container>\n\n    <!-- Nodes -->\n\n    <sup *ngSwitchCase=\"'footnoteReference'\" class=\"footnote-ref\"><a [href]=\"'#'+child.identifier\">{{child.label}}</a></sup>\n\n    <img *ngSwitchCase=\"'image'\" [src]=\"child.url\" [alt]=\"child.alt ?? ''\" [title]=\"child.title ?? ''\" />\n\n    <hr *ngSwitchCase=\"'thematicBreak'\" />\n\n    <br *ngSwitchCase=\"'break'\">\n\n    <b *ngSwitchDefault>Unknown node type: {{ child.type }}</b>\n\n  </ng-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: RemarkTemplatesService }], propDecorators: { node: [{
                type: Input,
                args: [{ required: true, alias: "remarkNode" }]
            }] } });

class RemarkComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RemarkComponent, deps: [{ token: RemarkTemplatesService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RemarkComponent, selector: "remark", inputs: { markdown: "markdown", processor: "processor", debug: "debug" }, providers: [RemarkTemplatesService], queries: [{ propertyName: "templateQuery", predicate: RemarkTemplateDirective }], usesOnChanges: true, ngImport: i0, template: `
    <remark-node *ngIf="tree && templates" [remarkNode]="tree"></remark-node>
    <pre *ngIf="debug"><code>{{tree | json }}</code></pre>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: RemarkNodeComponent, selector: "remark-node, [remarkNode]", inputs: ["remarkNode"] }, { kind: "pipe", type: i2.JsonPipe, name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
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
        }], ctorParameters: () => [{ type: RemarkTemplatesService }, { type: i0.ChangeDetectorRef }], propDecorators: { markdown: [{
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

class RemarkModule {
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

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RemarkComponent, RemarkModule, RemarkNodeComponent, RemarkTemplateDirective, RemarkTemplatesService };
//# sourceMappingURL=ngx-remark.mjs.map
