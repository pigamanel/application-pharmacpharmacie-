import { Injectable } from '@angular/core';
import { Apprenant } from './apprenant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {
  apprenants: Array<Apprenant> = []
  url: string = 'http://localhost:3000/apprenants';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Array<Apprenant>>(this.url);
  }
  addApprenant(a: Apprenant) {
    return this.http.post(this.url, a);
  }
  getOne(id: number) {
    return this.http.get<Apprenant>(this.url + '/' + id);
  }
}
