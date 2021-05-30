import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'submenu-button',
    templateUrl: './submenu-button.component.html',
    styleUrls: ['./submenu-button.component.scss'],
})
export class SubmenuButtonComponent implements OnInit {
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}
