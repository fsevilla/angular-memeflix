import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

import { BaseHttpService } from './../../common/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private baseHttpService:BaseHttpService) {}

  getMovies():Promise<any> {
    const url = `${environment.apiUrl}${environment.apiPath}/movies`;
    return this.baseHttpService.get(url).toPromise();
  }
}
