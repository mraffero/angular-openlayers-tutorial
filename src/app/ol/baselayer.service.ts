import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  catchError,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseLayerService {
  constructor(private http: HttpClient,) {}

  getBaseLayers(): Observable<any> {
    const url = `./assets/baselayers.json`;
    return this.http.get<any>(url).pipe(
      catchError((res) => {        
        throw res;
      })
    );
  }
}