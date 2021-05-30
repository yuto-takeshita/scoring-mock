import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'password-form',
    templateUrl: './password-form.component.html',
    styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent implements OnInit {
    @Input() form: FormControl;
    @Input() placeholder: string = 'パスワード';
    @Input() formId: string = 'password';
    public isVisible = false;

    constructor() {}

    ngOnInit(): void {}

    onChangeVisibility($event) {
        this.isVisible = !this.isVisible;
    }
}
