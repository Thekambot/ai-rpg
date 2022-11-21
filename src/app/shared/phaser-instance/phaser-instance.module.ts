import {
  ModuleWithProviders,
  NgModule,
  NgZone,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Phaser from 'phaser';
import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PhaserInstanceModule {
  public static activeGame: Phaser.Game;
  private static ngZone: NgZone;

  constructor(
    private _ngZone: NgZone,
    @Optional() @SkipSelf() parentModule?: PhaserInstanceModule
  ) {
    if (parentModule) {
      console.error(
        'Phaser Singleton is already loaded. Import it in the AppModule only'
      );
    } else {
      PhaserInstanceModule.ngZone = this._ngZone;
    }
  }

  public static forRoot(): ModuleWithProviders<PhaserInstanceModule> {
    return {
      ngModule: PhaserInstanceModule,
      providers: [],
    };
  }

  public static async init(): Promise<void> {
    this.ngZone.runOutsideAngular(() => {
      if (!this.activeGame) {
        this.activeGame = new Phaser.Game(environment.phaserConfig);
      }
    });
  }
}
