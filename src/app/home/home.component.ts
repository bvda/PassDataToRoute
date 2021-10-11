import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [{
    name:'Foo'
  }, {
    name:'Bar'
  }, {
    name:'Baz'
  }]

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigate(i:any[], d: any) {
    console.log(i, d)
    this.router.navigate(i, { state : {d}})
  }

}
