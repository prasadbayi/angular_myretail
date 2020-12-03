import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class catalogApiService
{

    constructor(private httpclient: HttpClient) {}
    getCatalogProducts(): Observable<any> {
        return this.httpclient.get("http://localhost:8082/catalog/products");

    }
}