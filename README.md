# Roadmap Angular

Este proyecto se utiliza como base de estudio y experimentación con **Angular**, con el objetivo de estructurar, optimizar y estandarizar buenas prácticas en aplicaciones frontend.

## Demo del Proyecto

[https://roadmap-angular.com/](https://roadmap-angular.pablogarciajc.com/)

| ![Imagen 1](https://pablogarciajc.com/wp-content/uploads/2025/11/roadmap-angular-1.webp) | ![Imagen 2](https://pablogarciajc.com/wp-content/uploads/2025/11/roadmap-angular-6.webp) |
|-----------|-----------|

## Áreas de Estudio

Este proyecto está enfocado en reforzar conocimientos esenciales de **Angular**, comprendiendo su arquitectura, flujo de datos y buenas prácticas mientras se construye una aplicación real.

- **Introducción a Angular**: Estructura del proyecto, Angular CLI, ciclos de vida de una aplicación y filosofía del framework.
- **Componentes**: Creación, comunicación entre componentes (Input/Output), encapsulación de estilos y organización por módulos.
- **Templates y Data Binding**: Binding unidireccional, bidireccional (`[(ngModel)]`), interpolación, property binding y event binding.
- **Directivas**: Uso de `ngIf`, `ngFor`, `ngSwitch`, estilos dinámicos, clases dinámicas y creación de directivas personalizadas.
- **Pipes**: Pipes básicos, parámetros, encadenamiento y creación de pipes personalizados.
- **Servicios (`Services`)**: Creación de servicios para lógica compartida, inyección de dependencias y separación de responsabilidades.
- **Consumo de API / HTTP Client**: Peticiones GET/POST, manejo de errores, tipado de respuestas y uso de interfaces.
- **Routing**: Configuración de rutas, rutas dinámicas, navegación, lazy loading y protección de rutas (guards).
- **Manejo de Formularios**:
  - Formularios basados en **Template** (ngModel)
  - Formularios **Reactivos** con `FormGroup`, `FormControl`, validaciones y estado
- **Signals** *(Angular 16+)*: Estado reactivo sin RxJS en componentes, stores y patrones de actualización.
- **Manejo de Estado**: Comunicación entre componentes, servicios reactivos y patrones recomendados para proyectos medianos.
- **Optimización y Performance**: Lazy loading, cambio de estrategia de detección (`ChangeDetectionStrategy.OnPush`) y modularización eficiente.

## Instalación

### Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados.
- **Make**: Utilizado para automatizar procesos y gestionar contenedores de manera más eficiente.

### Pasos de Instalación

1. Clona el repositorio desde GitHub.
2. Dentro del repositorio, encontrarás un archivo **Makefile** que contiene los comandos necesarios para iniciar y gestionar tu aplicación.
3. Usa los siguientes comandos de **Make** para interactuar con la aplicación:

    - **`make init-app`**: Inicializa la aplicación, copiando `.env`, creando symlinks, levantando contenedores, instalando dependencias y levantando el servidor de desarrollo.  
    - **`make up`**: Levanta los contenedores asociados a la aplicación en segundo plano.  
    - **`make down`**: Detiene los contenedores y apaga la aplicación.  
    - **`make shell`**: Ingresa al contenedor para interactuar directamente con el sistema.  
    - **`make npm-install`**: Instala todas las dependencias definidas en `package.json`.  
    - **`make npm-host`**: Levanta el servidor de desarrollo (`npm run dev`) accesible desde tu máquina local.  
    - **`make build-prod`**: Genera la versión de producción de la aplicación (`npm run build`) y mueve los archivos compilados a la raíz del proyecto.  

4. Además de estos comandos, dentro del archivo **Makefile** puedes encontrar otros comandos que te permitirán interactuar de manera más específica con los contenedores y los diferentes servicios que conforman la aplicación.

5. Accede a los siguientes URL:
   - **Aplicación Web**: [http://localhost:5173](http://localhost:5173)
   - **PhpMyAdmin**: [http://localhost:8082/](http://localhost:8082/)

---

## Contáctame / Sígueme en mis redes sociales

| Red Social   | Descripción                                              | Enlace                   |
|--------------|----------------------------------------------------------|--------------------------|
| **Facebook** | Conéctate y mantente al tanto de mis actualizaciones.    | [Presiona aquí](https://www.facebook.com/PabloGarciaJC) |
| **YouTube**  | Fundamentos de la programación, tutoriales y noticias.   | [Presiona aquí](https://www.youtube.com/@pablogarciajc)     |
| **Página Web** | Más información sobre mis proyectos y servicios.        | [Presiona aquí](https://pablogarciajc.com/)              |
| **LinkedIn** | Sigue mi carrera profesional y establece conexiones.     | [Presiona aquí](https://www.linkedin.com/in/pablogarciajc) |
| **Instagram**| Fotos, proyectos y contenido relacionado.                 | [Presiona aquí](https://www.instagram.com/pablogarciajc) |
| **Twitter**  | Proyectos, pensamientos y actualizaciones.                | [Presiona aquí](https://x.com/PabloGarciaJC?t=lct1gxvE8DkqAr8dgxrHIw&s=09)   |

---
> _"El buen manejo de tus finanzas hoy construye la seguridad del mañana."_

