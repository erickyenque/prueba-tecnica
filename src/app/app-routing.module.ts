import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'perfil',
    loadChildren: () => 
        import('./modules/perfil/perfil.module').then((m) => m.PerfilModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
