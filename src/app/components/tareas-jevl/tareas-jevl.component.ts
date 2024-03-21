import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'JEVL-app-tareas-jevl',
  templateUrl: './tareas-jevl.component.html',
  styleUrls: ['./tareas-jevl.component.css'],
})
export class TareasJEVLComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() {}

  ngOnInit(): void {}

  agregarTarea(): void {
    //console.log(this.nombreTarea);
    //crear el objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };

    //Agregar el objeto tarea al array-listTareas
    this.listTareas.push(tarea);

    //Resetear form
    this.nombreTarea = '';
  }
  eliminarTarea(index: number): void {
    //console.log('A borrar:' + index);
    this.listTareas.splice(index, 1);
  }
  actualizarTarea(index: number, tarea: Tarea): void {
    //console.log('A borrar:' + index);
    this.listTareas[index].estado = !tarea.estado;
  }
}
