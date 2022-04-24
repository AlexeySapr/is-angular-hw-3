import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImgService {
  private baseImgUrl = 'https://api.cloudinary.com/v1_1/dwsxbl2us/image/upload';
  constructor(private http: HttpClient) {}

  getImgUrl(imgData: FormData): Observable<any> {
    return this.http.post(this.baseImgUrl, imgData);
  }
}
