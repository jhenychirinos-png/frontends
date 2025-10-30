import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario {
  id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  salario: number;
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', apellido: '', correo: '', salario: 0 };
  correoDuplicado = false;
  modalVisible = false;

  // URL backend
  apiUrl = 'http://localhost:8000/api/empleados';

  constructor() {
    this.cargarEmpleados();
  }

  abrirModal() {
    this.modalVisible = true;
    this.correoDuplicado = false;
  }

  cerrarModal() {
    this.modalVisible = false;
    this.nuevoUsuario = { nombre: '', apellido: '', correo: '', salario: 0 };
  }

  async cargarEmpleados() {
    try {
      const res = await fetch(this.apiUrl);
      const data = await res.json();
      this.usuarios = data;
    } catch (error) {
      console.error('Error al cargar empleados:', error);
    }
  }

  async agregarUsuario() {
    this.correoDuplicado = false;

    if (!this.nuevoUsuario.nombre ||
        !this.nuevoUsuario.apellido ||
        !this.nuevoUsuario.correo ||
        !this.nuevoUsuario.salario) {
      return;
    }

    if (this.usuarios.find(u => u.correo === this.nuevoUsuario.correo)) {
      this.correoDuplicado = true;
      return;
    }

    try {
      const res = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.nuevoUsuario)
      });

      if (!res.ok) throw new Error('Error al crear empleado');

      const empleadoCreado = await res.json();
      this.usuarios.push(empleadoCreado);
      this.cerrarModal();
    } catch (error) {
      console.error(error);
    }
  }
}
