import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FreelanceCreator} from "../../freelance-creator";

export interface InputFieldData {
    title: FormControl;
    description: FormControl;
    prix: FormControl;
    temps: FormControl;
}

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.html',
    styleUrls: ['./input-field.scss']
})
export class InputField implements OnInit {
    @Input() data!: InputFieldData;
    @Input() parent!: FreelanceCreator;

    constructor() {
    }

    ngOnInit(): void {
        if (!this.data)
            throw new Error("Data are undefined");
    }

    public show: boolean = true;

    public switch() {
        this.show = !this.show;
    }

}
