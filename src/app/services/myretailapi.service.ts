import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class myRetailApiService
{

    constructor(private httpclient: HttpClient) {}
    getProductPrices(): Observable<any> {
        return this.httpclient.get("http://localhost:8080/pricing/products");

    }
}