import { IContent } from "./IContent";
import { IContentType } from "./IContentType";
import { IEntity } from "./IEntity";
import { IJob } from "./IJob";
import { IJobType } from "./IJobType";
import { IPermissionType } from "./IPermissionType";
import { IUser } from "./IUser";

export interface IPermission extends IEntity {
    IdentityType: "user" | "role";
    IdentityId: number;
    User: IUser;
    PermissionType: IPermissionType;
    Content?: IContent;
    Job?: IJob;
    ContentType?: IContentType;
    JobType?: IJobType;
}