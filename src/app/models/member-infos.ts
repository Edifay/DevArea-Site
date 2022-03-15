import { Badge } from "./badge";
import { MissionsList } from "./missions-list";

export interface MemberInfos {
    isMember: boolean;
    id: string;
    urlAvatar: string;
    name: string;
    tag: string;
    rank: number;
    xp: number;
    previous_xp_level: number;
    next_xp_level: number;
    level: number;
    missions_list: MissionsList[];
    badges: Badge[];
}