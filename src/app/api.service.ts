import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl: any = 'http://localhost/rest-api/public/buku';

  baca() {
    return this.http.get(this.apiUrl);
  }

  simpan(data: any) {
    console.log(data)
    return this.http.post(this.apiUrl, data)
  }

  ubah(data) {
    return this.http.put(this.apiUrl + '/' + data.judul, data)
  }

  hapus(judul) {
    return this.http.delete(this.apiUrl + '/' + judul)
  }
}