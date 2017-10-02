import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.css']
})
export class DemoModalComponent implements OnInit {

  constructor(private _dialogRef: MdDialogRef<DemoModalComponent>) { }

  ngOnInit() {
  }

}
