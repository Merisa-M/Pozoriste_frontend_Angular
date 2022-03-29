import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ZanrService } from '../services/zanr/zanr.service';

@Component({
  selector: 'app-zanr-detalji',
  templateUrl: './zanr-detalji.component.html',
  styleUrls: ['./zanr-detalji.component.css']
})
export class ZanrDetaljiComponent implements OnInit {
  id: number | undefined;
  zanr: any = {};

  constructor(
    private route: ActivatedRoute,
    private zanrService: ZanrService,
    private formBuilder: FormBuilder,
  ) {}

  zanrForm = this.formBuilder.group({
    Naziv: '',
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id) this.getZanr();
  }

  getZanr = () => {
    var data = this.zanrService.getZanr(this.id);
    data.subscribe((res: any) => {
      this.zanr = res;
    });
  };

  onSubmit = () => {
    if (this.zanrForm.value.Naziv == '') {
      alert('Naziv zanra je obavezan!');
    } else {
      this.zanrService.updateZanr(this.id, this.zanrForm.value);
      alert('Uspjesno te uredili zanr!');
      location.reload();
    }
  };
}
