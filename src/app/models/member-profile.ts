import { Badge } from "./badge";
import {MissionPreview} from "./missionPreview";

export interface MemberProfile {
    id: string;
    urlAvatar: string;
    name: string;
    tag: string;
    rank: number;
    xp: number;
    previous_xp_level: number;
    next_xp_level: number;
    level: number;
    missions_list: MissionPreview[];
    badges: Badge[];
    memberDescription: string | undefined;
}