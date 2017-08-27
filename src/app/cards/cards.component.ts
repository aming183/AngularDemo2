import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type;

  urlMatrixParamText;
  urlQueryParamText;

  constructor(private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    /*
    this.type = this.route.snapshot.params['type'];
    console.log(this.type);
    */

    this.route.params.subscribe(params => {
      this.type = params['type'];
      if (params['name']) {
        this.urlMatrixParamText = params['name'];
      }
    });

    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
      if (params['name']) {
        this.urlMatrixParamText = params['name'];
      }
    });


  }

  doTypePlus1(type) {
    var num = +type;
    this.router.navigateByUrl('/cards/' + (num + 1));
  }

  doTypeMinus1(type) {
    var num = +type;
    this.router.navigateByUrl('/cards/' + (num - 1));
  }

}
