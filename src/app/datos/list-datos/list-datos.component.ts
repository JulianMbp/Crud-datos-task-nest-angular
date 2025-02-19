import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-list-datos',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule, HttpClientModule],
  templateUrl: './list-datos.component.html',
  styleUrl: './list-datos.component.css'
})
export class ListDatosComponent implements OnInit { 
  datos: Array<Datos> = [];
  mostrarContrasena: boolean = false;

  constructor(private router: Router, private datosService: DatosService) {
    this.obtenerDatos();
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.datosService.obtenerDatos().subscribe(
      (ds: Datos[]) => {
        this.datos = ds;
        console.log(this.datos);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  onEditarNavigate(id: number) {
    this.router.navigate([`/datos/editar/${id}`]);
  }

  eliminarUsuario(id: string) {
    this.datosService.eliminarDatos(id).subscribe(() => {
      this.obtenerDatos();
      alert('Usuario eliminado correctamente');
    },
    (error) => {
      console.error('Error al eliminar usuario:', error);
      alert('Error al eliminar usuario');
    }
  );
  }
}
