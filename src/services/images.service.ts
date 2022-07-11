import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private urlImages: string = 'https://rtapi-7h6urepkoq-ue.a.run.app/images/';

  constructor(private http: HttpClient) {}

  getImagesById(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlImages}${id}`);
  }
}
