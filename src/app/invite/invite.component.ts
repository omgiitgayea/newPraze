import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

    custName: string;
    custNo: string;
    constructor() {
    }

    ngOnInit() {
    }

}
