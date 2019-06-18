import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input() messageValidator: string | object;
  @Input() fieldControl: FormControl;

  constructor() {
  }

  ngOnInit() {}

  getMessage() {
    let typeError;
    if(typeof this.messageValidator == 'object')
      typeError = Object.keys(this.fieldControl.errors)[0];

    return (typeof this.messageValidator == 'string') ? this.messageValidator : this.messageValidator[typeError];
  }

}
