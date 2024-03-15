import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './pages/form/form.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formulario', component: FormComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '**', redirectTo: 'inicio' } // Redirecciona a la página de inicio si la ruta no existe (Error 404)
];