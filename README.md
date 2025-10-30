````markdown
# 👟 MANACO - Proyecto de Calzados - PRIMER PARCIAL TECNOLOGIAS DE INTERNET

Este proyecto es una aplicación web desarrollada en Angular que representa una tienda ficticia de calzados llamada **MANACO**. Contiene páginas informativas, productos y un formulario de contacto. El objetivo es practicar conceptos de enrutamiento, componentes, estructura modular y accesibilidad web (a11y).

---

## 🔗 Enlace al Proyecto

🚧 Actualmente se ejecuta de forma local  
👉 Para correrlo: `http://localhost:4200`

## 🌐 Proyecto en Línea

📌 **URL del despliegue:**  
👉 [`https://helenpacari.github.io/primer_parcial/`](https://helenpacari.github.io/primer_parcial/)

---

## ✅ Requisitos Cumplidos

| Requisito                                    | Estado |
|---------------------------------------------|--------|
| Angular CLI y estructura de proyecto        | ✅     |
| Ruteo con `RouterModule` y `routerLink`     | ✅     |
| Componentes: Inicio, Servicios, Contacto    | ✅     |
| Navegación persistente con Layout           | ✅     |
| Footer y Header semánticos                  | ✅     |
| Carga de imágenes desde carpeta `assets`    | ✅     |
| Página de productos con diseño responsivo   | ✅     |
| Página de contacto con información personal | ✅     |
| Accesibilidad básica (a11y) aplicada        | ✅     |
| Uso de HTML semántico (`main`, `section`)   | ✅     |

---

## 📦 Instalación del Proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/helenPacari/primer_parcial.git
   cd manaco
````

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm start
   ```

   o

   ```bash
   ng serve
   ```

4. **Abrir en el navegador**

   ```
   http://localhost:4200
   ```

---

## 🛠️ Estructura del Proyecto

```
src/
│
├── app/
│   ├── components/         # Header, Footer, Layout
│   ├── pages/              # inicio, servicios, contacto
│   ├── app.routes.ts       # Rutas del proyecto
│   └── app.config.ts       # Configuración de app
│
├── assets/
│   └── img/                # Imágenes de productos y banner
│
├── styles.css              # Estilos globales (responsive, banner, etc)
└── index.html
```

---

## 📋 Descripción del Desarrollo

* Se creó una app Angular con rutas declaradas en un archivo independiente (`app.routes.ts`) usando carga asincrónica (`loadComponent`).
* Se diseñaron 3 páginas principales:

  * **Inicio:** muestra un banner e imágenes de productos (con nombre, precio y botón).
  * **Servicios:** incluye información sobre arreglos de calzado y delivery.
  * **Contacto:** muestra nombre, correo, celular y cargo (estudiante).
* Se implementó una estructura `LayoutComponent` que incluye header, footer y `router-outlet` para mantener la navegación sin recarga.
* Las imágenes están almacenadas en `src/assets/img` y son accesibles desde cualquier componente.
* Se utilizó HTML semántico (`main`, `section`, `figure`, `nav`, `footer`) y atributos de accesibilidad (`aria-label`, `role`, `figcaption`) para cumplir con buenas prácticas a11y.
* El diseño es **responsive** gracias a Grid y estilos en `styles.css`.

---

## 👩‍💻 Desarrollado por

**Jhannett Helen Pacari Alanoca**
📧 [helenpacari2506@gmail.com](mailto:helenpacari2506@gmail.com)
📱 63156906
🎓 Estudiante

---

## 📝 Licencia

Este proyecto es solo para fines académicos.
