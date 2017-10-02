import {Component, Input} from '@angular/core';
import {MdDialog} from "@angular/material";
import {LoginComponent} from "./login/login.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    openMenu = false;
    @Input() email: string;
    @Input() password: string;

    constructor(private _dialog: MdDialog) {

    }

    openDialog() {
        this.openMenu = false;
        const LOGIN_REF = this._dialog.open(LoginComponent, {
            width: '300px',
            data: {email: this.email, password: this.password},
        });
    }
}
