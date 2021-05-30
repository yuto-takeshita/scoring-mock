import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'user-id-form',
    templateUrl: './user-id-form.component.html',
    styleUrls: ['./user-id-form.component.scss'],
})
export class UserIdFormComponent implements OnInit {
    @Input() form: FormControl;

    constructor() {}

    ngOnInit(): void {}
}
