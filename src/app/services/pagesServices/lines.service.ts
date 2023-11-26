import {Injectable} from '@angular/core';
import {ChallengesComponent} from "../../components/pages/challenges/challenges";

@Injectable({
    providedIn: 'root'
})
export class LinesService {

    public lines: Map<string, any> = new Map();

    constructor() {
    }

    destroyAll() {
        this.lines.forEach((value, key) => {
            value.remove();
            this.lines.delete(key);
        })
    }

    set(key: string, value: any) {
        if (this.lines.has(key)) {
            this.lines.get(key).remove();
            this.lines.delete(key);
        }
        this.lines.set(key, value);

    }
}
