import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {CargaDesarrolladorTecnologiaService} from "../../servicios/carga-desarrollador-tecnologia.service";
import {IConvocatoria} from "../../interfaces/i-desarrollador-tecnologia";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public desarrolladores: IConvocatoria[]

  constructor(private titleService: Title, private cargaDesarrolladorTecnologia: CargaDesarrolladorTecnologiaService)  {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Inicio');
    this.cargaDesarrolladorTecnologia.getDesarrolladorTecnologia().subscribe(
      e=>{
        this.desarrolladores = e;
      }
    )
  }

  abrirDesarrollador(evt, nombre) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nombre).style.display = "block";
    evt.currentTarget.className += " active";

    /*let content = evt.target.parentElement.parentElement.parentElement.querySelector(".tabcontent");
    content.classList.toggle('d-none')*/
  }
}
