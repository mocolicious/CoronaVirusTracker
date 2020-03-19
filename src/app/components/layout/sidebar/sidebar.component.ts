import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
    this.opened = true;
  }

}

