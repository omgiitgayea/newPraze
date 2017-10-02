import {Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    accountName: string;
    accountStreet: string;
    accountCity: string;
    accountState: string;
    accountZip: number;

    constructor(private _account: AccountService) {
    }

    ngOnInit() {
        this._account.getAccountByEmail('nothing@at.all');
        this.accountZip = this._account.accountZip;
        this.accountName = this._account.accountName;
        this.accountStreet = this._account.accountStreet;
        this.accountCity = this._account.accountCity;
        this.accountState = this._account.accountState;
    }

}
