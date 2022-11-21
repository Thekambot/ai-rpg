import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { PhaserInstanceModule } from '@app/shared/phaser-instance/phaser-instance.module';

@Component({
  selector: 'app-map-window',
  templateUrl: './map-window.component.html',
  styleUrls: ['./map-window.component.scss'],
})
export class MapWindowComponent implements OnInit {
  phaserContainerId: string = environment.gameContainerID;

  constructor() {}

  async ngOnInit() {
    await PhaserInstanceModule.init();
  }
}
