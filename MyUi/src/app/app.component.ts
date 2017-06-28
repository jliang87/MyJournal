import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {}

  // getAuthInfo(): Observable<any> {
  //   let observableAuthData = this.http.post("http://0.0.0.0:4000/users/auth/facebook")
  //     .map(data => {
  //       let d = JSON.parse(data['_body'])['data'];
  //       return this.formatter.convertToClientFormat(d['attributes']);
  //     });
  //   return observableAuthData;
  // }

}
