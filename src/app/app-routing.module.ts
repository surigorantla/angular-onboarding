import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurendraComponent } from './surendra/surendra.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'surendra' },
  { path: 'surendra', component: SurendraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
