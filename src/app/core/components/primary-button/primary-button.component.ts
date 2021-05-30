import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
    @Input() disabled = false;
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}
