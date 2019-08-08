import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoCepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: string) {
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    return this.http.get(url);
  }
}
