export interface WebValidatedChallengeCard {
    challenge: WebValidatedChallenge;
    name: string;
    memberId: string;
    avatarUrl: string;
}


export interface WebValidatedChallenge {
    name: string;
    date: number;
}
