import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZanrService {
  constructor(private _http: HttpClient) {}

  getZanrove(): any {
    return this._http
      .get('http://localhost:5000/api/ZanrAng')
      .pipe(map((res) => res));
  }

  getZanr(Id: any): any {
    return this._http
      .get('http://localhost:5000/api/ZanrAng/' + Id)
      .pipe(map((res) => res));
  }

  postZanr(grad: any): any {
    return this._http
      .post('http://localhost:5000/api/ZanrAng', grad)
      .subscribe((res: any) => res);
  }

  deleteZanr(Id: any): any {
    console.log(Id);
    return this._http
      .delete('http://localhost:5000/api/ZanrAng/' + Id)
      .subscribe((res: any) => res);
  }

  updateZanr(Id: any, grad: any): any {
    return this._http
      .post('http://localhost:5000/api/ZanrAng/' + Id, grad)
      .subscribe((res: any) => res);
  }
}
