import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
// import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app - bayi';
  lstcomments: any;

  constructor(private _freeApiService: freeApiService) {

  }
  
  ngOnInit() {

    this._freeApiService.getcomments()
    .subscribe
    (
      data=>
      {
          this.lstcomments = data;

      }
    )
  }
}
