import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'negative-button',
    templateUrl: './negative-button.component.html',
    styleUrls: ['./negative-button.component.scss'],
})
export class NegativeButtonComponent implements OnInit {
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}
