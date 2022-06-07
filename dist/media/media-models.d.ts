/// <reference path="../core/core.d.ts" />
declare namespace Media {
    interface MediaLibrary {
        id: string;
        key: string;
        name: string;
        description: string;
    }
    interface MediaLibrarySummary {
        id: string;
        key: string;
        name: string;
        description: string;
    }
    interface MediaLibraryView {
        key: Core.FormField;
        name: Core.FormField;
        description: Core.FormField;
    }
    interface MediaResource {
        id: string;
        fileName: string;
        key: string;
        isFileUpload: boolean;
        link: string;
        isPublic: boolean;
        contentSize: number;
        mimeType: string;
        name: string;
        description: string;
        storageReferenceName: string;
        mediaLibrary: Core.EntityHeader;
        resourceType: Core.EntityHeader;
    }
    interface MediaResourceView {
        fileName: Core.FormField;
        key: Core.FormField;
        isFileUpload: Core.FormField;
        link: Core.FormField;
        contentSize: Core.FormField;
        mimeType: Core.FormField;
        name: Core.FormField;
        description: Core.FormField;
        mediaLibrary: Core.FormField;
        resourceType: Core.FormField;
    }
    interface MediaResourceSummary {
        id: string;
        key: string;
        name: string;
        isFileUpload: string;
        description: string;
        link: string;
        resourceType: string;
    }
}
