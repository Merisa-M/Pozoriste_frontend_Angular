import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GradService {
  constructor(private _http: HttpClient) {}

  getGradove(): any {
    return this._http
      .get('http://localhost:5000/api/GradAng')
      .pipe(map((res) => res));
  }

  getGrad(Id: any): any {
    return this._http
      .get('http://localhost:5000/api/GradAng/' + Id)
      .pipe(map((res) => res));
  }

  postGrad(grad: any): any {
    return this._http
      .post('http://localhost:5000/api/GradAng', grad)
      .subscribe((res: any) => res);
  }

  deleteGrad(Id: any): any {
    console.log(Id);
    return this._http
      .delete('http://localhost:5000/api/GradAng/' + Id)
      .subscribe((res: any) => res);
  }

  updateGrad(Id: any, grad: any): any {
    return this._http
      .post('http://localhost:5000/api/GradAng/' + Id, grad)
      .subscribe((res: any) => res);
  }
}
