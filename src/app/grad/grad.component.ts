import { Component, OnInit } from '@angular/core';
import { GradService } from '../services/grad/grad.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css'],
})
export class GradComponent implements OnInit {
  gradovi: any = [];
  constructor(
    private gradService: GradService,
    private formBuilder: FormBuilder
  ) {}

  gradForm = this.formBuilder.group({
    Naziv: '',
  });

  ngOnInit(): void {
    this.UcitajGradove();
  }

  UcitajGradove = () => {
    var data = this.gradService.getGradove();
    data.subscribe((res: any) => {
      this.gradovi = res['lista'];
      console.log(this.gradovi);
    });
  };

  onSubmit = () => {
    if (this.gradForm.value.Naziv == '') {
      alert('Naziv grada je obavezan!');
    } else {
      this.gradService.postGrad(this.gradForm.value);
      alert('Uspjesno ste dodali grad!');
      location.reload();
    }
  };

  deleteGrad = (Id: number) => {
    if (confirm('Sigurno zelite obrisati grad?')) {
      this.gradService.deleteGrad(Id);
      location.reload();
    }
  };
}
