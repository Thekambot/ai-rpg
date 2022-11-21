// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { MainScene } from '@app/shared/phaser-instance/scenes/MainScene';
import RESIZE = Phaser.Scale.RESIZE;
import CENTER_BOTH = Phaser.Scale.CENTER_BOTH;
import { AUTO } from 'phaser';

const phaserParentId = 'mapContainer';

export const environment = {
  production: false,
  gameContainerID: phaserParentId,
  phaserConfig: {
    type: AUTO,
    scale: {
      mode: RESIZE,
      width: window.innerWidth,
      autoCenter: CENTER_BOTH,
      height: window.innerHeight,
    },
    parent: phaserParentId,
    scene: [MainScene],
    plugins: {
      global: [],
      scene: [],
    },
    fps: {
      forceSetTimeOut: true,
    },
    render: {
      transparent: false,
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
