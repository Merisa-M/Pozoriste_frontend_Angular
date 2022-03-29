import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ZanrService } from '../services/zanr/zanr.service';

@Component({
  selector: 'app-zanr',
  templateUrl: './zanr.component.html',
  styleUrls: ['./zanr.component.css']
})
export class ZanrComponent implements OnInit {

  zanrovi: any = [];
  constructor(
    private zanrService: ZanrService,
    private formBuilder: FormBuilder
  ) {}

  zanrForm = this.formBuilder.group({
    Naziv: '',
  });

  ngOnInit(): void {
    this.UcitajZanrove();
  }

  UcitajZanrove = () => {
    var data = this.zanrService.getZanrove();
    data.subscribe((res: any) => {
      this.zanrovi = res['lista'];
      console.log(this.zanrovi);
    });
  };

  onSubmit = () => {
    if (this.zanrForm.value.Naziv == '') {
      alert('Naziv zanra je obavezan!');
    } else {
      this.zanrService.postZanr(this.zanrForm.value);
      alert('Uspjesno ste dodali zanr!');
      location.reload();
    }
  };

  deleteZanr = (Id: number) => {
    if (confirm('Sigurno zelite obrisati zanr?')) {
      this.zanrService.deleteZanr(Id);
      location.reload();
    }
  };
}
