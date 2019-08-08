import { ServicoCepService } from './../servico-cep.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-forms-cep',
  templateUrl: './forms-cep.component.html',
  styleUrls: ['./forms-cep.component.css']
})
export class FormsCepComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private servico: ServicoCepService) { }

  ngOnInit() {
    this.formulario = this.fb.group(
      {
        cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        logradouro: [null],
        bairro: [null],
        cidade: [null],
        uf: [null]
    });
  }

  onSubmit() {
    const cep = this.formulario.controls.cep.value;
    this.servico.consultaCep(cep).subscribe(
      dados => {}
    )
  }

}
