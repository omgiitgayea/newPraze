import {Injectable} from '@angular/core';

@Injectable()
export class AccountService {

    accountName: string;
    accountStreet: string;
    accountCity: string;
    accountState: string;
    accountZip: number;

    constructor() {
    }

    getAccountByEmail(email: string) {
        this.accountName = 'Studio Othermir';
        this.accountStreet = '1436 E 1270 S';
        this.accountState = 'Utah';
        this.accountCity = 'Provo';
        this.accountZip = 84606;
    }
}
