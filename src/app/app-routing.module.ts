import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'game',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: () =>
      import('@app/split-layout/split-layout.module').then(
        (m) => m.SplitLayoutPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
