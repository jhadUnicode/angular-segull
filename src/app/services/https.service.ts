import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(endPoint: string, query: any, headers: any) {
    const options: any = {}
    if (headers) {
      options['headers'] = headers;
    }
    let queryParams = '';
    if (query && Object.keys(query).length >= 1) {
      let aaQueryParams: string[] = [];
      Object.keys(query).forEach(key => {
        aaQueryParams.push(`${key}=${query[key]}`);
      })
      queryParams = `?${aaQueryParams.join('&')}`
    }
    return this.httpClient.get(`${environment.apiUrl}${endPoint}${queryParams}`, options);
  }

  post(endPoint: string, body: any, headers: any) {
    const options: any = {};
    if (headers) {
      options['headers'] = headers;
    }
    return this.httpClient.post(endPoint, body, options);
  }

  put(endPoint: string, body: any, headers: any) {
    const options: any = {};
    if (headers) {
      options['headers'] = headers;
    }
    return this.httpClient.put(endPoint, body, options);
  }

  // extra.com/posts/{id}
  delete(endPoint: string, headers: any) {
    const options: any = {};
    if (headers) {
      options['headers'] = headers;
    }
    return this.httpClient.delete(endPoint, options);
  }
}
