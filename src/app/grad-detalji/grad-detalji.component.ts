import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GradService } from '../services/grad/grad.service';

@Component({
  selector: 'app-grad-detalji',
  templateUrl: './grad-detalji.component.html',
  styleUrls: ['./grad-detalji.component.css'],
})
export class GradDetaljiComponent implements OnInit {
  id: number | undefined;
  grad: any = {};

  constructor(
    private route: ActivatedRoute,
    private gradService: GradService,
    private formBuilder: FormBuilder,
  ) {}

  gradForm = this.formBuilder.group({
    Naziv: '',
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id) this.getGrad();
  }

  getGrad = () => {
    var data = this.gradService.getGrad(this.id);
    data.subscribe((res: any) => {
      this.grad = res;
    });
  };

  onSubmit = () => {
    if (this.gradForm.value.Naziv == '') {
      alert('Naziv grada je obavezan!');
    } else {
      this.gradService.updateGrad(this.id, this.gradForm.value);
      alert('Uspjesno te uredili grad!');
      location.reload();
    }
  };
}
