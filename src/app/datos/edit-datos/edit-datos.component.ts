import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-edit-datos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.css']
})
export class EditDatosComponent implements OnInit {
  datosForm!: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private datosService: DatosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.datosForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.cargarDatos();
  }

  cargarDatos() {
    this.datosService.obtenerDatosPorId(this.id).subscribe(
      (datos: Datos) => {
        this.datosForm.patchValue(datos);
      },
      (error) => {
        console.error("Error al cargar datos:", error);
      }
    );
  }

  editarDatos(datos: Datos) {
    this.datosService.editarDatos(this.id, datos).subscribe(
      () => {
        alert("Datos actualizados");
        this.router.navigate(['/']);
      },
      (error) => {
        console.error("Error al editar datos:", error);
        alert("Error al editar datos");
      }
    );
  }
}
