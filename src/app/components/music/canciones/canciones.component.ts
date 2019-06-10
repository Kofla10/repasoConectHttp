import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html'
})
export class CancionesComponent implements OnInit {

  canciones: any[]=[];

  constructor(private serv: HttpService, private http:HttpClient) { 
    this.serv.getCanciones()
    .subscribe((data:any)=>{
      console.log(data);
      this.canciones= data;
    });

  }

 

  ngOnInit() {
  }

}
