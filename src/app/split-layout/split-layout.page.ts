import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.page.html',
  styleUrls: ['./split-layout.page.scss'],
})
export class SplitLayoutPage implements OnInit {
  public contentId: string = 'menu-content';

  public sideMenuTabs = [
    { title: 'Chat', url: '/chat', icon: 'chatbox-outline' },
    { title: 'Characters', url: '/characters', icon: 'body-outline' },
    // { title: 'Settings', url: '/folder/Favorites', icon: 'heart' },
  ];

  constructor() {}

  ngOnInit() {}
}
