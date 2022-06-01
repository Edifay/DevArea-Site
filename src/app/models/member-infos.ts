import { Badge } from "./badge";
<<<<<<< HEAD
import {MissionPreview} from "./missionPreview";
import {FreelanceContent} from "./FreelanceContent";

export interface MemberInfos {
=======
import { MissionsList } from "./missions-list";

export interface MemberInfos {
    isMember: boolean;
>>>>>>> main
    id: string;
    urlAvatar: string;
    name: string;
    tag: string;
    rank: number;
    xp: number;
    previous_xp_level: number;
    next_xp_level: number;
    level: number;
<<<<<<< HEAD
    missions_list: MissionPreview[];
    freelance: FreelanceContent | undefined;
    badges: Badge[];
    memberDescription: string | undefined;
=======
    missions_list: MissionsList[];
    badges: Badge[];
>>>>>>> main
}