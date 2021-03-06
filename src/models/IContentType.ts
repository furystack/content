import { IAspect } from "./IAspect";
import { IFieldType } from "./IFieldType";
import { IJobType } from "./IJobType";
import { INamedEntity } from "./INamedEntity";
import { IPermission } from "./IPermission";
import { IReferenceType } from "./IReferenceType";

/**
 * Represents a type definition for a generic content instance
 */
export interface IContentType extends INamedEntity {
    /**
     * A short description in HTML format
     */
    Description: string;
    /**
     * Category description. Can be used for grouping
     */
    Category: string;

    /**
     *  List of aspects
     */
    Aspects: Promise<IAspect[]>;

    /**
     * Definition for field types. These fields will be created automatically for the content
     */
    FieldTypes: Promise<IFieldType[]>;
    /**
     * Definition for reference types. These references will be created automatically for the content
     */
    ReferenceTypes: Promise<IReferenceType[]>;
    /**
     * Definition for job types. These jobs will be created automatically for the content
     */
    JobTypes: Promise<IJobType[]>;
    /**
     * Assigned permissions for the content type
     */
    Permissions: Promise<IPermission[]>;
}
