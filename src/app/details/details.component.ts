import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    data: any 
   constructor(private router: Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state?.d 
  }

  ngOnInit(): void { }

}
