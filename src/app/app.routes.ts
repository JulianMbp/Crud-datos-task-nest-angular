import { Routes } from '@angular/router';
import { CreateDatosComponent } from './datos/create-datos/create-datos.component';
import { EditDatosComponent } from './datos/edit-datos/edit-datos.component';
import { ListDatosComponent } from './datos/list-datos/list-datos.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

export const routes: Routes = [
  { path: 'task', component: TaskListComponent },
  { path: 'task/nuevo', component: TaskCreateComponent },
  { path: 'task/editar/:id', component: TaskEditComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: 'datos', component: ListDatosComponent },
  { path: 'datos/nuevo', component: CreateDatosComponent },
  { path: 'datos/editar/:id', component: EditDatosComponent },
];
