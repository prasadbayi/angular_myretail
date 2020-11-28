import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class freeApiService
{

    constructor(private httpclient: HttpClient) {}
    getcomments(): Observable<any> {
        return this.httpclient.get("http://localhost:8082/catalog/products");

    }
}