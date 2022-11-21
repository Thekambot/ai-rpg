import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitLayoutPage } from '@app/split-layout/split-layout.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SplitLayoutPage,
    children: [
      {
        path: 'chat',
        loadChildren: () =>
          import('@app/chat/chat.module').then((m) => m.ChatPageModule),
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('@app/characters/characters.module').then(
            (m) => m.CharactersPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitLayoutPageRoutingModule {}
