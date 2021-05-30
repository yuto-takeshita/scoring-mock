import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'secondary-button',
    templateUrl: './secondary-button.component.html',
    styleUrls: ['./secondary-button.component.scss'],
})
export class SecondaryButtonComponent implements OnInit {
    @Input() disabled = false;
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}
