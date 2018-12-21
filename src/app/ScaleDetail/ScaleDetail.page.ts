// ScaleDetail.page.ts
// ScaleDetail page component declaration
// ----------------------------------------------------------------------------

// importing modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// creating the component
@Component({
  selector: 'app-scale-list',
  templateUrl: 'ScaleDetail.page.html',
  styleUrls: ['ScaleDetail.page.scss']
})
export class ScaleDetailPage implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
