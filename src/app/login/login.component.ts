import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    errorHere: boolean;

    constructor(private _dialogRef: MdDialogRef<LoginComponent>, @Inject(MD_DIALOG_DATA) public data: { email: string, password: string }, private _router: Router) {
    }

    ngOnInit() {
        this.email = this.data.email;
        this.password = this.data.password;
        this.errorHere = false;
    }

    login() {
        if (this.email && this.password) {
            this.errorHere = false;
            this._dialogRef.close();
            this._router.navigateByUrl('/dashboard');
        }
        else {
            this.errorHere = true;
        }
    }

}
