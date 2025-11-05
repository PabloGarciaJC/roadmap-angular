import { Routes } from '@angular/router';

import { Introduccion } from './pages/introduccion/introduccion';
import { Componentes } from './pages/componentes/componentes';
import { Modulos } from './pages/modulos/modulos';
import { Services } from './pages/services/services';
import { Directivas } from './pages/directivas/directivas';
import { Rutas } from './pages/rutas/rutas';
import { Formularios } from './pages/formularios/formularios';

export const routes: Routes = [
  { path: '', component: Introduccion },
  { path: 'componentes', component: Componentes },
  { path: 'modulos', component: Modulos },
  { path: 'services', component: Services },
  { path: 'directivas', component: Directivas },
  { path: 'rutas', component: Rutas },
  { path: 'formularios', component: Formularios },
  { path: '**', redirectTo: '' }
];
