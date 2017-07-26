import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desc-bio',
  templateUrl: './desc-bio.component.html',
  styleUrls: ['./desc-bio.component.css']
})
export class DescBioComponent implements OnInit {
  loading: boolean = true

  constructor() { }

  ngOnInit() {
  }

  onLoad() {
this.loading = false;
}


}
