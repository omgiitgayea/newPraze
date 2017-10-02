import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {DemoModalComponent} from "../demo-modal/demo-modal.component";

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {

    constructor(private _dialog: MdDialog) {
    }

    ngOnInit() {
    }

    openDialog() {
        const DEMO_REF = this._dialog.open(DemoModalComponent, {
            panelClass: 'demo-dialog'
        });
    }
}
