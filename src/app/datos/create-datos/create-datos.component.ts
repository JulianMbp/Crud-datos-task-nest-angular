import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from "../datos.service";



@Component({
  selector: 'app-create-datos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-datos.component.html',
  styleUrl: './create-datos.component.css'
})
export class CreateDatosComponent implements OnInit {
datosForm!: FormGroup;

constructor(private formbuilder:FormBuilder,
   private datosService:DatosService,
   private router:Router){}

ngOnInit() {
    this.datosForm = this.formbuilder.group({
      name:['', [Validators.required,Validators.minLength(6)]],
      lastName:['', [Validators.required,Validators.minLength(2)]],
      email:['', [Validators.required,Validators.minLength(1)]],
      password:['', [Validators.required,Validators.minLength(4)]],

    })
}
crearDatos(datos: Datos) {
    this.datosService.crearDatos(datos).subscribe(
        (datosCreado) => {
            alert("Datos Creado");
            this.datosForm.reset();
            this.router.navigate(['/datos']);
        },
        (error) => {
            console.error("Error al crear datos:", error);
            alert("Error al crear datos");
        }
    );
}
    
}
