import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaUsersComponent} from "./componentes/user/lista-users/lista-users.component";
import {ListaUsersResolveService} from './servicios/lista-users-resolve.service';
import {ModificarUserComponent} from "./componentes/user/modificar-user/modificar-user.component";
import {ModificarUserResolveService} from './servicios/modificar-user-resolve.service';
import {HomeComponent} from './componentes/home/home.component';
import {CrearUserComponent} from "./componentes/user/crear-user/crear-user.component";
import {ListaClasificacionesAlarmasComponent} from './componentes/clasificacion-alarma/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ModificarClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/modificar-clasificacion-alarma/modificar-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasResolveService} from './servicios/lista-clasificaciones-alarmas-resolve.service';
import {ModificarClasificacionAlarmaResolveService} from './servicios/modificar-clasificacion-alarma-resolve.service';
import {CrearClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/crear-clasificacion-alarma/crear-clasificacion-alarma.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/tipo-centro-sanitario/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ListaTiposCentrosSanitariosResolveService} from './servicios/lista-tipos-centros-sanitarios-resolve.service';
import {ModificarTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/modificar-tipo-centro-sanitario/modificar-tipo-centro-sanitario.component';
import {ModificarTipoCentroSanitarioResolveService} from './servicios/modificar-tipo-centro-sanitario-resolve.service';
import {CrearTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/crear-tipo-centro-sanitario/crear-tipo-centro-sanitario.component';
import {ListaTiposRecursosComunitariosComponent} from './componentes/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ListaTiposRecursosComunitariosResolveService} from './servicios/lista-tipos-recursos-comunitarios-resolve.service';
import {ModificarTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/modificar-tipo-recurso-comunitario/modificar-tipo-recurso-comunitario.component';
import {ModificarTipoRecursoComunitarioResolveService} from './servicios/modificar-tipo-recurso-comunitario-resolve.service';
import {CrearTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/crear-tipo-recurso-comunitario/crear-tipo-recurso-comunitario.component';
import {ListaTiposModalidadesPacientesComponent} from './componentes/tipo-modalidad-paciente/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import {ListaTiposModalidadesPacientesResolveService} from './servicios/lista-tipos-modalidades-pacientes-resolve.service';
import {ModificarTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/modificar-tipo-modalidad-paciente/modificar-tipo-modalidad-paciente.component';
import {ModificarTipoModalidadPacienteResolveService} from './servicios/modificar-tipo-modalidad-paciente-resolve.service';
import {CrearTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/crear-tipo-modalidad-paciente/crear-tipo-modalidad-paciente.component';
import {ListaTiposAlarmasComponent} from './componentes/tipo-alarma/lista-tipos-alarmas/lista-tipos-alarmas.component';
import {ListaTiposAlarmasResolveService} from './servicios/lista-tipos-alarmas-resolve.service';
import {ModificarTipoAlarmaComponent} from './componentes/tipo-alarma/modificar-tipo-alarma/modificar-tipo-alarma.component';
import {ModificarTipoAlarmaResolveService} from './servicios/modificar-tipo-alarma-resolve.service';
import {CrearTipoAlarmaComponent} from './componentes/tipo-alarma/crear-tipo-alarma/crear-tipo-alarma.component';
import {ListaDireccionesComponent} from './componentes/direccion/lista-direcciones/lista-direcciones.component';
import {ListaDireccionesResolveService} from './servicios/lista-direcciones-resolve.service';
import {ModificarDireccionComponent} from './componentes/direccion/modificar-direccion/modificar-direccion.component';
import {ModificarDireccionResolveService} from './servicios/modificar-direccion-resolve.service';
import {CrearDireccionComponent} from './componentes/direccion/crear-direccion/crear-direccion.component';
import {ListaCentrosSanitariosComponent} from './componentes/centro-sanitario/lista-centros-sanitarios/lista-centros-sanitarios.component';
import {ListaCentrosSanitariosResolveService} from './servicios/lista-centros-sanitarios-resolve.service';
import {ModificarCentroSanitarioComponent} from './componentes/centro-sanitario/modificar-centro-sanitario/modificar-centro-sanitario.component';
import {CrearCentroSanitarioComponent} from './componentes/centro-sanitario/crear-centro-sanitario/crear-centro-sanitario.component';
import {ListaPersonasComponent} from './componentes/persona/lista-personas/lista-personas.component';
import {ListaPersonasResolveService} from './servicios/lista-personas-resolve.service';
import {ModificarPersonaComponent} from './componentes/persona/modificar-persona/modificar-persona.component';
import {ModificarPersonaResolveService} from './servicios/modificar-persona-resolve.service';
import {CrearPersonaComponent} from './componentes/persona/crear-persona/crear-persona.component';
import {ModificarCentroSanitarioResolveService} from './servicios/modificar-centro-sanitario-resolve.service';
import {ListaRecursosComunitariosComponent} from './componentes/recurso-comunitario/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import {ListaRecursosComunitariosResolveService} from './servicios/lista-recursos-comunitarios-resolve.service';
import {ModificarRecursoComunitarioComponent} from './componentes/recurso-comunitario/modificar-recurso-comunitario/modificar-recurso-comunitario.component';
import {ModificarRecursoComunitarioResolveService} from './servicios/modificar-recurso-comunitario-resolve.service';
import {CrearRecursoComunitarioComponent} from './componentes/recurso-comunitario/crear-recurso-comunitario/crear-recurso-comunitario.component';
import {PantallaLoginComponent} from './componentes/pantalla-login/pantalla-login.component';
import {LoginGuard} from './guards/login.guard';
import {ListaRelacionTerminalRecursosComunitariosResolveService} from "./servicios/relacion-terminal-recurso-comunitario/lista-relacion-terminal-recursos-comunitarios-resolve.service";
import {
  ListaRelacionTerminalRecursosComunitariosComponent
} from "./componentes/relacion-terminal-recursos-comunitarios/lista-relacion-terminal-recursos-comunitarios/lista-relacion-terminal-recursos-comunitarios.component";
import {
  ModificarRelacionTerminalRecursosComunitariosResolveService
} from "./servicios/relacion-terminal-recurso-comunitario/modificar-relacion-terminal-recursos-comunitarios-resolve.service";
import {
  ModificarRelacionTerminalRecursosComunitariosComponent
} from "./componentes/relacion-terminal-recursos-comunitarios/modificar-relacion-terminal-recursos-comunitarios/modificar-relacion-terminal-recursos-comunitarios.component";
import {RecursosComunitariosPersonalesComponent} from "./componentes/recursos-comunitarios-personales/recursos-comunitarios-personales.component";
import {ListaTiposViviendaComponent} from "./componentes/tipo-vivienda/lista-tipos-vivienda/lista-tipos-vivienda.component";
import {ListaViviendasResolveService} from "./servicios/lista-viviendas-resolve.service";
import {CrearViviendaComponent} from "./componentes/tipo-vivienda/crear-tipo-vivienda/crear-vivienda.component";
import {ModificarTipoViviendaComponent} from "./componentes/tipo-vivienda/modificar-tipo-vivienda/modificar-tipo-vivienda.component";
import {ListaTiposSituacionComponent} from "./componentes/tipo-situacion/lista-tipos-situacion/lista-tipos-situacion.component";
import {ModificarViviendaResolveService} from "./servicios/modificar-vivienda-resolve.service";
import {ListaSituacionesService} from "./servicios/lista-situaciones.service";
import {CrearTipoSituacionComponent} from "./componentes/tipo-situacion/crear-tipo-situacion/crear-tipo-situacion.component";
import {ModificarTipoSituacionComponent} from "./componentes/tipo-situacion/modificar-tipo-situacion/modificar-tipo-situacion.component";
import {ModificarTipoSituacionService} from "./servicios/modificar-tipo-situacion.service";
import {BorrarTipoViviendaComponent} from "./componentes/tipo-vivienda/borrar-tipo-vivienda/borrar-tipo-vivienda.component";
import {BorrarTipoViviendaService} from "./servicios/borrar-tipo-vivienda.service";
import {BorrarTipoSituacionComponent} from "./componentes/tipo-situacion/borrar-tipo-situacion/borrar-tipo-situacion.component";
import {BorrarTipoSituacionService} from "./servicios/borrar-tipo-situacion.service";
import {ListaCopiaSeguridadComponent} from "./componentes/copia-seguridad/lista-copia-seguridad/lista-copia-seguridad.component";
import {ListaCopiaSeguridadService} from "./servicios/lista-copia-seguridad.service";
import {
  CrearCopiaSeguridadComponent
} from "./componentes/copia-seguridad/crear-copia-seguridad/crear-copia-seguridad.component";
import {
  RestaurarCopiaSeguridadComponent
} from "./componentes/copia-seguridad/restaurar-copia-seguridad/restaurar-copia-seguridad.component";
import {NuevoAgendaComponent} from "./componentes/agenda/nuevo-agenda/nuevo-agenda.component";
import {ListaAgendaResolveService} from "./servicios/lista-agenda-resolve.service";
import {ListaHistoricoTipoSituacionResolveService} from "./servicios/lista-historico-tipo-situacion-resolve.service";
import {
  CrearHistoricoTipoSituacionComponent
} from "./componentes/historico-tipo-situacion/crear-historico-tipo-situacion/crear-historico-tipo-situacion.component";
import {ListaTerminalResolveService} from "./servicios/lista-terminal-resolve.service";
import {
  HistoricoTipoSituacionComponent
} from "./componentes/historico-tipo-situacion/lista-historico-tipo-situacion/historico-tipo-situacion.component";
import {
  ModificarHistoricoTipoSituacionComponent
} from "./componentes/historico-tipo-situacion/modificar-historico-tipo-situacion/modificar-historico-tipo-situacion.component";
import {
  DetallesHistoricoTipoSituacionResolveService
} from "./servicios/detalles-historico-tipo-situacion-resolve.service";
import {
  ItemHistoricoTipoSituacionComponent
} from "./componentes/historico-tipo-situacion/item-historico-tipo-situacion/item-historico-tipo-situacion.component";
import {ItemTipoAgendaComponent} from "./componentes/tipo-agenda/item-tipo-agenda/item-tipo-agenda.component";
import {ItemAgendaComponent} from "./componentes/agenda/item-agenda/item-agenda.component";
import {ListaPacientesResolveService} from "./servicios/lista-paciente-resolve.service";
import {DetallesAgendaResolveService} from "./servicios/detalles-agenda.resolve.service";
import {
  ListaHistoricoAgendaComponent
} from "./componentes/historico-agenda/lista-historico-agenda/lista-historico-agenda.component";
import {ListaHistoricoAgendaResolveService} from "./servicios/lista-historico-agenda-resolve.service";
import {
  ItemHistoricoAgendaComponent
} from "./componentes/historico-agenda/item-historico-agenda/item-historico-agenda.component";
import {DetalleHistoricoAgendaResolveService} from "./servicios/detalle-historico-agenda-resolve.service";
import {ModificarAgendaComponent} from "./componentes/agenda/modificar-agenda/modificar-agenda.component";
import {
  ModificarHistoricoAgendaComponent
} from "./componentes/historico-agenda/modificar-historico-agenda/modificar-historico-agenda.component";
import {ListaTodasAgendasResolveService} from "./servicios/lista-todas-agendas-resolve.service";
import {
  NuevoHistoricoAgendaComponent
} from "./componentes/historico-agenda/nuevo-historico-agenda/nuevo-historico-agenda.component";
import {
  CrearRelacionTerminalRecursosComunitariosComponent
} from "./componentes/relacion-terminal-recursos-comunitarios/crear-relacion-terminal-recursos-comunitarios/crear-relacion-terminal-recursos-comunitarios.component";
import {ListaAlarmasResolveService} from "./servicios/alarmas/lista-alarmas-resolve.service";
import {ListaAlarmasComponent} from "./componentes/alarma/lista-alarmas/lista-alarmas.component";
import {ModificarCerrarAlarmaComponent} from "./componentes/alarma/modificar-cerrar-alarma/modificar-cerrar-alarma.component";
import {ModificarAlarmaResolveService} from "./servicios/alarmas/modificar-alarma-resolve.service";
import {ListaTerminalesResolveService} from "./servicios/terminal/lista-terminales-resolve.service";
import {CrearAlarmaUcrComponent} from "./componentes/alarma/crear-alarma-ucr/crear-alarma-ucr.component";
import {ListaTerminalComponent} from "./componentes/terminal/lista-terminal/lista-terminal.component";
import {ModificarTerminalComponent} from "./componentes/terminal/modificar-terminal/modificar-terminal.component";
import {ModificarTerminalResolveService} from "./servicios/terminal/modificar-terminal-resolve.service";
import {CrearTerminalComponent} from "./componentes/terminal/crear-terminal/crear-terminal.component";
import {ListaPacienteComponent} from "./componentes/paciente/lista-paciente/lista-paciente.component";
import {ModificarPacienteComponent} from "./componentes/paciente/modificar-paciente/modificar-paciente.component";
import {ModificarPacienteResolveService} from "./servicios/paciente/modificar-paciente-resolve.service";
import {CrearPacienteComponent} from "./componentes/paciente/crear-paciente/crear-paciente.component";
import {
  ListaRelacionPacientePersonaComponent
} from "./componentes/relacion-paciente-persona/lista-relacion-paciente-persona/lista-relacion-paciente-persona.component";
import {
  ListaRelacionPacientePersonaResolveService
} from "./servicios/relacion-paciente-persona/lista-relacion-paciente-persona-resolve.service";
import {
  ListaCentroSanitarioAlarmaComponent
} from "./componentes/centro-sanitario-alarma/lista-centro-sanitario-alarma/lista-centro-sanitario-alarma.component";
import {
  ListaCentrosSanitariosAlarmaResolveService
} from "./servicios/centro-sanitario-alarma/lista-centros-sanitarios-alarma-resolve.service";
import {
  ListaRecursoComunitarioAlarmaComponent
} from "./componentes/recurso-comunitario-alarma/lista-recurso-comunitario-alarma/lista-recurso-comunitario-alarma.component";
import {
  ListaRecursosComunitariosAlarmaResolveService
} from "./servicios/recursos-comunitarios-alarma/lista-recursos-comunitarios-alarma-resolve.service";
import {
  ListaPersonaContactoAlarmaComponent
} from "./componentes/persona-contacto-alarma/lista-persona-contacto-alarma/lista-persona-contacto-alarma.component";
import {
  ListaPersonaContactoAlarmaResolveService
} from "./servicios/persona-contacto-alarma/lista-persona-contacto-alarma-resolve.service";
import {
  ListaDispositivosAuxiliaresTerminalComponent
} from "./componentes/dispositivos-auxiliares-terminal/lista-dispositivos-auxiliares-terminal/lista-dispositivos-auxiliares-terminal.component";
import {
  ListaDispositivosAuxiliaresTerminalResolveService
} from "./servicios/dispositivos-auxiliares-terminal/lista-dispositivos-auxiliares-terminal-resolve.service";
import {
  ListaRelacionUsuarioCentroComponent
} from "./componentes/relacion-usuario-centro/lista-relacion-usuario-centro/lista-relacion-usuario-centro.component";
import {
  ListaRelacionUsuarioCentroResolveService
} from "./servicios/relacion-usuario-centro/lista-relacion-usuario-centro-resolve.service";
import {
  ModificarRelacionPacientePersonaComponent
} from "./componentes/relacion-paciente-persona/modificar-relacion-paciente-persona/modificar-relacion-paciente-persona.component";
import {
  ModificarRelacionPacientePersonaResolveService
} from "./servicios/relacion-paciente-persona/modificar-relacion-paciente-persona-resolve.service";
import {
  CrearRelacionPacientePersonaComponent
} from "./componentes/relacion-paciente-persona/crear-relacion-paciente-persona/crear-relacion-paciente-persona.component";
import {
  ModificarCentroSanitarioAlarmaComponent
} from "./componentes/centro-sanitario-alarma/modificar-centro-sanitario-alarma/modificar-centro-sanitario-alarma.component";
import {
  CrearCentroSanitarioAlarmaComponent
} from "./componentes/centro-sanitario-alarma/crear-centro-sanitario-alarma/crear-centro-sanitario-alarma.component";
import {
  ModificarCentroSanitarioAlarmaResolveService
} from "./servicios/centro-sanitario-alarma/modificar-centro-sanitario-alarma-resolve.service";
import {
  ModificarRecursoComunitarioAlarmaComponent
} from "./componentes/recurso-comunitario-alarma/modificar-recurso-comunitario-alarma/modificar-recurso-comunitario-alarma.component";
import {
  ModificarRecursosComunitariosAlarmaResolveService
} from "./servicios/recursos-comunitarios-alarma/modificar-recursos-comunitarios-alarma-resolve.service";
import {
  CrearRecursoComunitarioAlarmaComponent
} from "./componentes/recurso-comunitario-alarma/crear-recurso-comunitario-alarma/crear-recurso-comunitario-alarma.component";
import {
  ModificarPersonaContactoAlarmaComponent
} from "./componentes/persona-contacto-alarma/modificar-persona-contacto-alarma/modificar-persona-contacto-alarma.component";
import {
  ModificarPersonaContactoAlarmaResolveService
} from "./servicios/persona-contacto-alarma/modificar-persona-contacto-alarma-resolve.service";
import {
  CrearPersonaContactoAlarmaComponent
} from "./componentes/persona-contacto-alarma/crear-persona-contacto-alarma/crear-persona-contacto-alarma.component";
import {
  ModificarDispositivosAuxiliaresTerminalComponent
} from "./componentes/dispositivos-auxiliares-terminal/modificar-dispositivos-auxiliares-terminal/modificar-dispositivos-auxiliares-terminal.component";
import {
  CrearDispositivosAuxiliaresTerminalComponent
} from "./componentes/dispositivos-auxiliares-terminal/crear-dispositivos-auxiliares-terminal/crear-dispositivos-auxiliares-terminal.component";
import {
  ModificarDispositivosAuxiliaresTerminalResolveService
} from "./servicios/dispositivos-auxiliares-terminal/modificar-dispositivos-auxiliares-terminal-resolve.service";
import {
  ModificarRelacionUsuarioCentroComponent
} from "./componentes/relacion-usuario-centro/modificar-relacion-usuario-centro/modificar-relacion-usuario-centro.component";
import {
  ModificarRelacionUsuarioCentroResolveService
} from "./servicios/relacion-usuario-centro/modificar-relacion-usuario-centro-resolve.service";
import {
  CrearRelacionUsuarioCentroComponent
} from "./componentes/relacion-usuario-centro/crear-relacion-usuario-centro/crear-relacion-usuario-centro.component";
import {
  ModificarTeleoperadorAlarmaComponent
} from "./componentes/alarma/modificar-teleoperador-alarma/modificar-teleoperador-alarma.component";
import {ListaGruposService} from "./servicios/lista-grupos.service";
import {GruposComponent} from "./componentes/grupos/grupos.component";
import {CrearAlarmaTerminalComponent} from "./componentes/alarma/crear-alarma-terminal/crear-alarma-terminal.component";
import { TipoAgendaComponent } from './componentes/tipo-agenda/lista-tipo-agenda/tipo-agenda.component';
import { ListaTiposAgendaResolveService } from './servicios/lista-tipo-agenda-resolve.service';
import { NuevoTipoAgendaComponent } from './componentes/tipo-agenda/nuevo-tipo-agenda/nuevo-tipo-agenda.component';
import { DetallesTipoAgendaComponent } from './componentes/tipo-agenda/detalles-tipo-agenda/detalles-tipo-agenda.component';
import { DetallesTipoAgendaResolveService } from './servicios/detalles-tipo-agenda-resolve.service';
import { AgendaComponent } from './componentes/agenda/lista-agenda/agenda.component';


const routes: Routes = [
  {path: 'login', component: PantallaLoginComponent},
  {path: 'inicio', canActivate: [LoginGuard], component: HomeComponent},
  {path: 'recurso-comunitarios-personales', canActivate: [LoginGuard], component: RecursosComunitariosPersonalesComponent},

  {
    path: 'usuarios',
    component: ListaUsersComponent,
    canActivate: [LoginGuard],
    resolve: {
      users: ListaUsersResolveService
    }
  },
  {
    path: 'usuarios/modificar/:id',
    component: ModificarUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: ModificarUserResolveService
    }
  },
  {
    path: 'usuarios/nuevo',
    component: CrearUserComponent,
    canActivate: [LoginGuard]
  },

  {
    path: 'grupos',
    component: GruposComponent,
    canActivate: [LoginGuard],
    resolve: {
      grupos: ListaGruposService
    },
  },
  {
    path: 'usuarios/borrado/:id',
    component: ListaUsersComponent,
    canActivate: [LoginGuard],
    resolve: {
      users: ListaUsersResolveService
    }
  },
  {
    path: 'clasificaciones_alarmas',
    component: ListaClasificacionesAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    },
  },
  {
    path: 'clasificaciones_alarmas/modificar/:id',
    component: ModificarClasificacionAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificacion_alarma: ModificarClasificacionAlarmaResolveService
    }
  },
  {path: 'clasificaciones_alarmas/nueva', component: CrearClasificacionAlarmaComponent, canActivate: [LoginGuard]},
  {
    path: 'tipos_centros_sanitarios',
    component: ListaTiposCentrosSanitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'tipos_centros_sanitarios/modificar/:id',
    component: ModificarTipoCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_centro_sanitario: ModificarTipoCentroSanitarioResolveService
    }
  },
  {path: 'tipos_centros_sanitarios/nuevo', component: CrearTipoCentroSanitarioComponent, canActivate: [LoginGuard]},
  {
    path: 'tipos_recursos_comunitarios',
    component: ListaTiposRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'tipos_recursos_comunitarios/modificar/:id',
    component: ModificarTipoRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_recurso_comunitario: ModificarTipoRecursoComunitarioResolveService
    }
  },
  {
    path: 'tipos_recursos_comunitarios/nuevo',
    component: CrearTipoRecursoComunitarioComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'tipos_modalidades_pacientes',
    component: ListaTiposModalidadesPacientesComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_modalidades_pacientes: ListaTiposModalidadesPacientesResolveService
    }
  },
  {
    path: 'tipos_modalidades_pacientes/modificar/:id',
    component: ModificarTipoModalidadPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_modalidad_paciente: ModificarTipoModalidadPacienteResolveService
    }
  },
  {
    path: 'tipos_modalidades_pacientes/nuevo',
    component: CrearTipoModalidadPacienteComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'tipos_alarmas',
    component: ListaTiposAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_alarmas: ListaTiposAlarmasResolveService
    }
  },
  {
    path: 'tipos_alarmas/modificar/:id',
    component: ModificarTipoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_alarma: ModificarTipoAlarmaResolveService,
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    }
  },
  {
    path: 'tipos_alarmas/nuevo',
    component: CrearTipoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    }
  },
  {
    path: 'direcciones/borrado/:id',
    component: ListaDireccionesComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'direcciones',
    component: ListaDireccionesComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'direcciones/modificar/:id',
    component: ModificarDireccionComponent,
    canActivate: [LoginGuard],
    resolve: {
      direccion: ModificarDireccionResolveService
    }
  },
  {path: 'direcciones/nueva', component: CrearDireccionComponent, canActivate: [LoginGuard]},
  {
    path: 'centros_sanitarios',
    component: ListaCentrosSanitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      centros_sanitarios: ListaCentrosSanitariosResolveService
    }
  },
  {
    path: 'centros_sanitarios/modificar/:id',
    component: ModificarCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      centro_sanitario: ModificarCentroSanitarioResolveService,
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'centros_sanitarios/nuevo',
    component: CrearCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios',
    component: ListaRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      recursos_comunitarios: ListaRecursosComunitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios/modificar/:id',
    component: ModificarRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      recurso_comunitario: ModificarRecursoComunitarioResolveService,
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios/nuevo',
    component: CrearRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'personas',
    component: ListaPersonasComponent,
    canActivate: [LoginGuard],
    resolve: {
      personas: ListaPersonasResolveService
    }
  },
  {
    path: 'personas/modificar/:id',
    component: ModificarPersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      persona: ModificarPersonaResolveService,
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'personas/nueva',
    component: CrearPersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'agenda',
    component: AgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      agendasDelDia: ListaAgendaResolveService,
      tipos_agenda: ListaTiposAgendaResolveService,
    }
  },
  {
    path:'agenda/nueva',
    component: NuevoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      agendas: ListaAgendaResolveService,
      tipos_agenda: ListaTiposAgendaResolveService,
      personas: ListaPersonasResolveService,
      pacientes: ListaPacientesResolveService
    }
  },
  {
    path:'agenda/nueva/:id',
    component: NuevoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      agendas: ListaAgendaResolveService,
      tipos_agenda: ListaTiposAgendaResolveService,
      personas: ListaPersonasResolveService,
      pacientes: ListaPacientesResolveService
    }
  },
  {
    path: 'agenda/modificar/:id',
    component: ModificarAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      agenda: DetallesAgendaResolveService,
      tipos_agenda: ListaTiposAgendaResolveService,
      pacientes: ListaPacientesResolveService,
      personas_contacto: ListaPersonasResolveService,
    }
  },
  {
    path: 'agenda/borrado/:id',
    component: ItemAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      agendas: ListaAgendaResolveService,
      agenda: ListaAgendaResolveService
    }
  },
  {
    path: 'historico_agenda',
    component: ListaHistoricoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      historicos_de_agenda: ListaHistoricoAgendaResolveService
    }
  },
  {
    path: 'historico_agenda/nuevo/:id',
    component: NuevoHistoricoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      agendas: ListaTodasAgendasResolveService,
      teleoperadores: ListaUsersResolveService,
      agenda: DetallesAgendaResolveService
    }
  },
  {
    path: 'historico_agenda/modificar/:id',
    component: ModificarHistoricoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      historico_agenda: DetalleHistoricoAgendaResolveService,
      agendas: ListaTodasAgendasResolveService,
      teleoperadores: ListaUsersResolveService,
    }
  },
  {
    path: 'historico_agenda/borrado/:id',
    component: ListaHistoricoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      historicos_de_agenda: ListaHistoricoAgendaResolveService
    }
  },
  {
    path: 'tipo_agenda',
    component: TipoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService,
      tipos_agenda: ListaTiposAgendaResolveService
    }
  },
  {
    path: 'tipo_agenda/nueva',
    component: NuevoTipoAgendaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'tipo_agenda/modificar/:id',
    component: DetallesTipoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_agenda: DetallesTipoAgendaResolveService,
      tipos_agenda: ListaTiposAgendaResolveService
    }
  },
  {
    path: 'tipo_agenda/borrado/:id',
    component: ItemTipoAgendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_agenda: ListaTiposAgendaResolveService,
      tipos_agenda: ListaTiposAgendaResolveService
    }
  },
  {
    path: 'viviendas',
    component: ListaTiposViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_viviendas: ListaViviendasResolveService
    }
  },
  {
    path: 'viviendas/nueva',
    component: CrearViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaViviendasResolveService
    }
  },
  {
    path: 'viviendas/modificar/:id',
    component: ModificarTipoViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_vivienda: ModificarViviendaResolveService,
      clasificaciones_viviendas: ListaViviendasResolveService
    }
  },
  {
    path: 'viviendas/borrado/:id',
    component: BorrarTipoViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_vivienda: BorrarTipoViviendaService,
      clasificaciones_viviendas: ListaViviendasResolveService
    }
  },
  {
    path: 'usuarios/modificar/:id',
    component: ModificarUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: ModificarUserResolveService
    }
  },
  {
    path: 'situaciones',
    component: ListaTiposSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'situaciones/nueva',
    component: CrearTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'situaciones/modificar/:id',
    component: ModificarTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_situaciones: ModificarTipoSituacionService,
      clasificaciones_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'situaciones/borrado/:id',
    component: BorrarTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_situaciones: BorrarTipoSituacionService,
      clasificaciones_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'historico_situaciones',
    component: HistoricoTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      historicos_situaciones: ListaHistoricoTipoSituacionResolveService
    }
  },
  {
    path: 'historico_situaciones/nueva',
    component: CrearHistoricoTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      historicos_situaciones: ListaHistoricoTipoSituacionResolveService,
      tipos_situaciones: ListaSituacionesService,
      terminales: ListaTerminalResolveService
    }
  },
  {
    path: 'historico_situaciones/modificar/:id',
    component: ModificarHistoricoTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      historico_situacion: DetallesHistoricoTipoSituacionResolveService,
      tipos_situaciones: ListaSituacionesService,
      terminales: ListaTerminalResolveService
    }
  },
  {
    path: 'historico_situaciones/borrado/:id',
    component: ItemHistoricoTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      historico_situaciones: ListaHistoricoTipoSituacionResolveService,
      historico_situacion: ListaHistoricoTipoSituacionResolveService
    }
  },
  {
    path: 'usuarios/modificar/:id',
    component: ModificarUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: ModificarUserResolveService
    }
  },
  {
    path: 'relacion_terminal_recurso_comunitario',
    component: ListaRelacionTerminalRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_terminal_recursos_comunitarios: ListaRelacionTerminalRecursosComunitariosResolveService
    }
  },
  {
    path: 'relacion_terminal_recurso_comunitario/modificar/:id',
    component: ModificarRelacionTerminalRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_terminal_recursos_comunitarios: ModificarRelacionTerminalRecursosComunitariosResolveService,
      relaciones_recursos_comunitarios: ListaRecursosComunitariosResolveService,
      relaciones_terminales: ListaTerminalesResolveService,
    }
  },
  {
    path: 'relacion_terminal_recurso_comunitario/nueva',
    component: CrearRelacionTerminalRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_terminal_recursos_comunitarios: ListaRelacionTerminalRecursosComunitariosResolveService,
      relaciones_recursos_comunitarios: ListaRecursosComunitariosResolveService,
      relaciones_terminales: ListaTerminalesResolveService,
    }
  },
  {
    path: 'relacion_terminal_recurso_comunitario/borrado/:id',
    component: ListaRelacionTerminalRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_terminal_recursos_comunitarios: ListaRelacionTerminalRecursosComunitariosResolveService
    }
  },
  {
    path: 'alarmas',
    component: ListaAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarmas: ListaAlarmasResolveService
    }
  },
  {
    path: 'alarmas/modificar/:id',
    component: ModificarCerrarAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarma: ModificarAlarmaResolveService,
    }
  },
  {
    path: 'alarmas/aceptada/modificar/:id',
    component: ModificarCerrarAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarma: ModificarAlarmaResolveService,
    }
  },
  {
    path: 'alarmas/modificar_teleoperador/:id',
    component: ModificarTeleoperadorAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarma: ModificarAlarmaResolveService,
      teleoperadores: ListaUsersResolveService
    }
  },
  {
    path: 'alarmas/nueva/ucr',
    component: CrearAlarmaUcrComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarma: ListaAlarmasResolveService,
      terminales: ListaTerminalesResolveService,
      tipos_alarmas: ListaTiposAlarmasResolveService,
      pacientes_ucr: ListaPacientesResolveService
    }
  },
  {
    path: 'alarmas/nueva/terminal',
    component: CrearAlarmaTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarma: ListaAlarmasResolveService,
      terminales: ListaTerminalesResolveService,
      tipos_alarmas: ListaTiposAlarmasResolveService,
      pacientes_ucr: ListaPacientesResolveService
    }
  },
  {
    path: 'alarmas/borrado/:id',
    component: ListaAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      alarmas: ListaAlarmasResolveService
    }
  },
  {
    path: 'terminales',
    component: ListaTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      terminales: ListaTerminalesResolveService
    }
  },
  {
    path: 'terminales/modificar/:id',
    component: ModificarTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      terminales: ModificarTerminalResolveService,
      titulares: ListaPacientesResolveService,
      tipo_vivienda: ListaViviendasResolveService
    }
  },
  {
    path: 'terminales/nuevo',
    component: CrearTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      terminal: ListaTerminalesResolveService,
      titulares: ListaPacientesResolveService,
      tipos_vivienda: ListaViviendasResolveService
    }
  },
  {
    path: 'terminales/borrado/:id',
    component: ListaTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      terminales: ListaTerminalesResolveService
    }
  },
  {
    path: 'pacientes',
    component: ListaPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      pacientes: ListaPacientesResolveService
    }
  },
  {
    path: 'pacientes/modificar/:id',
    component: ModificarPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      paciente: ModificarPacienteResolveService,
      terminales: ListaTerminalesResolveService,
      personas: ListaPersonasResolveService,
      tipo_modalidades_pacientes: ListaTiposModalidadesPacientesResolveService
    }
  },
  {
    path: 'pacientes/nuevo',
    component: CrearPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      paciente: ListaPacientesResolveService,
      terminales: ListaTerminalesResolveService,
      personas: ListaPersonasResolveService,
      tipo_modalidades_pacientes: ListaTiposModalidadesPacientesResolveService
    }
  },
  {
    path: 'pacientes/borrado/:id',
    component: ListaPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      pacientes: ListaPacientesResolveService
    }
  },
  {
    path: 'relacion_paciente_persona',
    component: ListaRelacionPacientePersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      relaciones_pacientes_personas: ListaRelacionPacientePersonaResolveService
    }
  },
  {
    path: 'relacion_paciente_persona/borrado/:id',
    component: ListaRelacionPacientePersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      relaciones_pacientes_personas: ListaRelacionPacientePersonaResolveService
    }
  },
  {
    path: 'relacion_paciente_persona/modificar/:id',
    component: ModificarRelacionPacientePersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_paciente_persona: ModificarRelacionPacientePersonaResolveService,
      pacientes: ListaPacientesResolveService,
      personas: ListaPersonasResolveService,
    }
  },
  {
    path: 'relacion_paciente_persona/nueva',
    component: CrearRelacionPacientePersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_paciente_persona: ListaRelacionPacientePersonaResolveService,
      pacientes: ListaPacientesResolveService,
      personas: ListaPersonasResolveService,
    }
  },
  {
    path: 'centro_sanitario_alarma',
    component: ListaCentroSanitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      centros_sanitarios_alarma: ListaCentrosSanitariosAlarmaResolveService
    }
  },
  {
    path: 'centro_sanitario_alarma/modificar/:id',
    component: ModificarCentroSanitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      centros_sanitarios_alarma: ModificarCentroSanitarioAlarmaResolveService,
      alarmas: ListaAlarmasResolveService,
      centros_sanitarios: ListaCentrosSanitariosResolveService
    }
  },
  {
    path: 'centro_sanitario_alarma/nuevo',
    component: CrearCentroSanitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      centros_sanitarios_alarma: ListaCentrosSanitariosAlarmaResolveService,
      alarmas: ListaAlarmasResolveService,
      centros_sanitarios: ListaCentrosSanitariosResolveService
    }
  },
  {
    path: 'centro_sanitario_alarma/borrado/:id',
    component: ListaCentroSanitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      centros_sanitarios_alarma: ListaCentrosSanitariosAlarmaResolveService
    }
  },
  {
    path: 'recursos_comunitarios_alarma',
    component: ListaRecursoComunitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      recursos_comunitarios_alarma: ListaRecursosComunitariosAlarmaResolveService
    }
  },
  {
    path: 'recursos_comunitarios_alarma/modificar/:id',
    component: ModificarRecursoComunitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      recursos_comunitarios_alarma: ModificarRecursosComunitariosAlarmaResolveService,
      alarmas: ListaAlarmasResolveService,
      recursos_comunitarios: ListaRecursosComunitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios_alarma/nuevo',
    component: CrearRecursoComunitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      recursos_comunitarios_alarma: ListaRecursosComunitariosAlarmaResolveService,
      alarmas: ListaAlarmasResolveService,
      recursos_comunitarios: ListaRecursosComunitariosResolveService

    }
  },
  {
    path: 'recursos_comunitarios_alarma/borrado/:id',
    component: ListaRecursoComunitarioAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      recursos_comunitarios_alarma: ListaRecursosComunitariosAlarmaResolveService
    }
  },
  {
    path: 'personas_contacto_alarma',
    component: ListaPersonaContactoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      personas_contacto_alarma: ListaPersonaContactoAlarmaResolveService
    }
  },
  {
    path: 'personas_contacto_alarma/modificar/:id',
    component: ModificarPersonaContactoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      persona_contacto_alarma: ModificarPersonaContactoAlarmaResolveService,
      alarmas: ListaAlarmasResolveService,
      personas_contactos: ListaPersonasResolveService,
    }
  },
  {
    path: 'personas_contacto_alarma/nueva',
    component: CrearPersonaContactoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      persona_contacto_alarma: ListaPersonaContactoAlarmaResolveService,
      alarmas: ListaAlarmasResolveService,
      personas_contactos: ListaPersonasResolveService,
    }
  },
  {
    path: 'personas_contacto_alarma/borrado/:id',
    component: ListaPersonaContactoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      personas_contacto_alarma: ListaPersonaContactoAlarmaResolveService
    }
  },
  {
    path: 'dispositivos_auxiliares_terminal',
    component: ListaDispositivosAuxiliaresTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      dispositivos_auxiliares_terminal: ListaDispositivosAuxiliaresTerminalResolveService
    }
  },
  {
    path: 'dispositivos_auxiliares_terminal/modificar/:id',
    component: ModificarDispositivosAuxiliaresTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      dispositivo_auxiliar_terminal: ModificarDispositivosAuxiliaresTerminalResolveService,
      terminales: ListaTerminalesResolveService,
      tipo_alarmas: ListaTiposAlarmasResolveService
    }
  },
  {
    path: 'dispositivos_auxiliares_terminal/nuevo',
    component: CrearDispositivosAuxiliaresTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      dispositivo_auxiliar_terminal: ListaDispositivosAuxiliaresTerminalResolveService,
      terminales: ListaTerminalesResolveService,
      tipo_alarmas: ListaTiposAlarmasResolveService
    }
  },
  {
    path: 'dispositivos_auxiliares_terminal/borrado/:id',
    component: ListaDispositivosAuxiliaresTerminalComponent,
    canActivate: [LoginGuard],
    resolve: {
      dispositivos_auxiliares_terminal: ListaDispositivosAuxiliaresTerminalResolveService
    }
  },
  {
    path: 'relaciones_usuario_centro',
    component: ListaRelacionUsuarioCentroComponent,
    canActivate: [LoginGuard],
    resolve: {
      relaciones_usuario_centro: ListaRelacionUsuarioCentroResolveService
    }
  },
  {
    path: 'relaciones_usuario_centro/modificar/:id',
    component: ModificarRelacionUsuarioCentroComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_usuario_centro: ModificarRelacionUsuarioCentroResolveService,
      pacientes: ListaPacientesResolveService,
      centros_sanitarios: ListaCentrosSanitariosResolveService

    }
  },
  {
    path: 'relaciones_usuario_centro/nueva',
    component: CrearRelacionUsuarioCentroComponent,
    canActivate: [LoginGuard],
    resolve: {
      relacion_usuario_centro: ListaRelacionUsuarioCentroResolveService,
      pacientes: ListaPacientesResolveService,
      centros_sanitarios: ListaCentrosSanitariosResolveService
    }
  },
  {
    path: 'relaciones_usuario_centro/borrado/:id',
    component: ListaRelacionUsuarioCentroComponent,
    canActivate: [LoginGuard],
    resolve: {
      relaciones_usuario_centro: ListaRelacionUsuarioCentroResolveService
    }
  },
  {
    path: 'copia_seguridad',
    component: ListaCopiaSeguridadComponent,
    canActivate: [LoginGuard],
    resolve: {
      copia_seguridad: ListaCopiaSeguridadService
    }
  },
  {
    path: 'copia_seguridad/nueva',
    component: CrearCopiaSeguridadComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'copia_seguridad/restaurar',
    component: RestaurarCopiaSeguridadComponent,
    canActivate: [LoginGuard],
  },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
