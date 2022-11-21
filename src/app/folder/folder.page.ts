import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhaserInstanceModule } from '../phaser-instance/phaser-instance.module';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    await PhaserInstanceModule.init();
  }
}