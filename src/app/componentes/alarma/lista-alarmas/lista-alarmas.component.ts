import { Component, OnInit } from '@angular/core';
import { Alarma } from "../../../clases/alarma";
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {OrdenacionTablasService} from "../../../servicios/ordenacion-tablas.service";
import {AuthService} from "../../../servicios/auth.service";
import {CargaAlarmaService} from "../../../servicios/alarmas/carga-alarma.service";
import {IAlarma} from "../../../interfaces/i-alarma";


@Component({
  selector: 'app-lista-alarmas',
  templateUrl: './lista-alarmas.component.html',
  styleUrls: ['./lista-alarmas.component.scss']
})
export class ListaAlarmasComponent implements OnInit {
  numPaginacion: number = 1;
  inputBusqueda: any = '';
  isAdmin: boolean;
  public fecha: string;
  public fechaToday = new Date();
  public alarmasDelDia: IAlarma[] = [];
  public inputFechaBusqueda: any = '';

  constructor(private route: ActivatedRoute,private auth:AuthService, private titleService: Title, private ordTabla: OrdenacionTablasService,private cargarAlarmas:CargaAlarmaService) { }


  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.alarmasDelDia = this.route.snapshot.data['alarmas'];
    this.titleService.setTitle('Alarmas');
    this.fecha = + this.fechaToday.getDate() + ' de ' + this.getNombreMes(this.fechaToday.getMonth()) + ' de '
      + this.fechaToday.getFullYear();

  }

  ordenacionTabla(indice: number, tipo: string){
    this.ordTabla.ordenacionService(indice, tipo);
  }
  seleccionarFondo(alarma: Alarma): string {
    if (alarma.estado_alarma == "Cerrada") {
      return "cerrada"
    }
    return "abierta"

  }
  buscarPorFecha(event) {
    let fechaSeparada = event.split('-');

    this.cargarAlarmas.getAlarmasPorFecha(event).subscribe(
      e => {
        const datos: any = e;
        this.inputFechaBusqueda = event;
        if (e) {
          this.alarmasDelDia = datos;
          this.fecha = + fechaSeparada[2] + ' de '
            + this.getNombreMesActualizarFecha(fechaSeparada[1]) + ' de '
            + fechaSeparada[0];
          if(datos && datos.length > 0) {
            this.alarmasDelDia = this.alarmasDelDia.filter(el => {
              return el;
            });
          }
        }
        document.getElementById("campoBusqueda").focus();
      });
  }
  // Método para conseguir el nombre del mes usando el número que nos devuelve la función getMonth()
  getNombreMes (numMes: number) {
    let mes = '';
    switch (numMes) {
      case 0:
        mes = 'enero';
        break;
      case 1:
        mes = 'febrero';
        break;
      case 2:
        mes = 'marzo';
        break;
      case 3:
        mes = 'abril';
        break;
      case 4:
        mes = 'mayo';
        break;
      case 5:
        mes = 'junio';
        break;
      case 6:
        mes = 'julio';
        break;
      case 7:
        mes = 'agosto';
        break;
      case 8:
        mes = 'septiembre';
        break;
      case 9:
        mes = 'octubre';
        break;
      case 10:
        mes = 'noviembre';
        break;
      case 11:
        mes = 'diciembre';
        break;
    }
    return mes;
  }

  // Método para conseguir el nombre del mes usando el número que nos devuelve la función getMonth() pero con 0
  // al principio si es solo 1 digito y en string y empezando por 01 en vez de 0
  getNombreMesActualizarFecha (numMes: string) {
    let mes = '';
    switch (numMes) {
      case '01':
        mes = 'enero';
        break;
      case '02':
        mes = 'febrero';
        break;
      case '03':
        mes = 'marzo';
        break;
      case '04':
        mes = 'abril';
        break;
      case '05':
        mes = 'mayo';
        break;
      case '06':
        mes = 'junio';
        break;
      case '07':
        mes = 'julio';
        break;
      case '08':
        mes = 'agosto';
        break;
      case '09':
        mes = 'septiembre';
        break;
      case '10':
        mes = 'octubre';
        break;
      case '11':
        mes = 'noviembre';
        break;
      case '12':
        mes = 'diciembre';
        break;
    }
    return mes;
  }

}
