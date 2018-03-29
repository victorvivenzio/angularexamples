import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor(
    public route:ActivatedRoute
  ) {
    this.route.parent.params.subscribe( params => {
      console.log(params['id']);
    });
  }

  ngOnInit() {
  }

}
