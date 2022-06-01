export interface FreelanceContent {
    member_id: string;
    name: string;
    avatar_url: string;
    description: string;
    fields: FreelanceField[];
}

export interface FreelanceField {
    title: string;
    description: string;
    prix: string;
    temps: string;
    inline: boolean;
}