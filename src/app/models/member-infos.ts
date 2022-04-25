import { Badge } from "./badge";
import {MissionPreview} from "./missionPreview";

export interface MemberInfos {
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
}