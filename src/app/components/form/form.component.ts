import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private ser: FormService) { }

  ngOnInit() {
  }

}
