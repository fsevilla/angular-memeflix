import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

import { BaseHttpService } from './../../common/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private baseHttpService:BaseHttpService) { }

  getUsers():Promise<any> {
    const url = environment.apiUrl + environment.apiPath + '/users';
    return this.baseHttpService.get(url).toPromise();
  }

}
