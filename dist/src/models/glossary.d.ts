/// <reference path="core/core.d.ts" />
declare namespace Glossary {
    interface Glossary {
        id: string;
        name: string;
        key: string;
        description: string;
        drafts: GlossaryTerm[];
        definitions: GlossaryTerm[];
    }
    interface GlossaryView {
        name: string;
        key: string;
        description: string;
    }
    interface GlossarySummary {
        id: string;
        name: string;
        description: string;
    }
    interface GlossaryTerm {
        id: string;
        name: string;
        isPublished: boolean;
        publishDate?: string;
        icon: string;
        key: string;
        definition: string;
        example: string;
        related: Core.EntityHeader[];
    }
}
