import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class MitarbeiterService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){ }

  public getMitarbeiter(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/mitarbeiter/all`);
  }
  
  }

  

