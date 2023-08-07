import { Component } from '@angular/core';
import { Employee } from '../employee';
import { HttpErrorResponse } from '@angular/common/http';
import { MitarbeiterService } from '../mitarbeiter.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {
  public mitarbeiter: Employee[] = [];

  constructor(private mitarbeiterService: MitarbeiterService){}

  public getMitarbeiter(): void{
    this.mitarbeiterService.getMitarbeiter().subscribe(
      (response: Employee[]) =>{
        this.mitarbeiter = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
      );
    
  }

  ngOnInit() : void{
    this.getMitarbeiter()
  }
  
}
