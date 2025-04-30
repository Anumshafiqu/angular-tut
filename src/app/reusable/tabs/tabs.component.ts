import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  // Used to send data from a parent component to a child component.
  @Input() tabList: string[] = [];
  ngOnInit(): void {
    this.currentTab = this.tabList[0]
  }
// Used to emit events or data from a child component to a parent component.
  @Output() onTabClicked = new EventEmitter<string>();
  onTabChange(tabName: string) {
    this.currentTab = tabName;
    this.onTabClicked.emit(tabName);
  }
  currentTab: string = '';


}
