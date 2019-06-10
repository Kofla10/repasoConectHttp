import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getCanciones() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD6u6ajBeiRdYKkZYLvkXfRlpoT9sdyWH-B05BTMxDX5r4Tfpopa9_bR-wMZnWUED3TI9oVpa5rPuPPp58'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', { headers })
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }
}
