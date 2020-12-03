import { Component } from '@angular/core';
import { catalogApiService } from './services/catalogapi.service';
import { myRetailApiService } from './services/myretailapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app - bayi';
  list_catalog_products: any;
  list_myretail_product_pricing: any;

  constructor(private _catalogApiService: catalogApiService, private _myRetailApiService: myRetailApiService) {

  }
 
  ngOnInit() {

    this._catalogApiService.getCatalogProducts()
    .subscribe
    (
      data1=>
      {
          this.list_catalog_products = data1;

      }
    )

    this._myRetailApiService.getProductPrices()
    .subscribe
    (
      data=>
      {
          this.list_myretail_product_pricing = data;

      }
    )
  }

}
