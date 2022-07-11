import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  private urlProperty: string =
    'https://rtapi-7h6urepkoq-ue.a.run.app/properties';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<any> {
    return this.http.get<any>(this.urlProperty);
  }
}
