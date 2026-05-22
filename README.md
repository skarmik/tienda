# Tiendita - Frontend E-commerce

Este proyecto es una interfaz de usuario (Frontend) para una tienda en línea, enfocada en el diseño visual y la experiencia de usuario. Incluye tanto la vista pública de la tienda como un panel de administración (Dashboard).

El proyecto actualmente se encuentra en su fase inicial, concentrando todos los esfuerzos en la maquetación, componentes interactivos y el diseño visual adaptable.

## Tecnologías Utilizadas

- **Angular 21.2.3**: Framework principal para la estructura, componentes y enrutamiento.
- **Tailwind CSS**: Framework de CSS utilizado para el diseño personalizado, responsivo y moderno.

## Características Actuales

- **Diseño de Tienda**: Catálogo de productos, vistas de tarjetas de productos y diseño de la interfaz de navegación.
- **Dashboard de Administración**: Panel interno para visualizar métricas, gráficas estáticas y control de inventario de forma visual.
- **Diseño Responsivo**: Adaptado para visualizarse correctamente en dispositivos móviles, tabletas y computadoras de escritorio.

## Estado del Proyecto

Actualmente, el proyecto es **estrictamente de diseño (Frontend)**. No cuenta con conexión a base de datos, backend ni API real. Todos los datos de los productos y gráficas del dashboard están simulados con fines de demostración.

---

## Servidor de Desarrollo

Para iniciar un servidor de desarrollo local, ejecute el siguiente comando:

ng serve

Una vez que el servidor esté corriendo, abra su navegador e ingrese a http://localhost:4200/. La aplicación se recargará automáticamente cada vez que modifique alguno de los archivos fuente.

## Generación de Código

Angular CLI incluye herramientas para la generación automática de código. Para crear un nuevo componente, ejecute:

ng generate component nombre-del-componente

Para obtener una lista completa de los esquemas disponibles (como components, directives o pipes), ejecute:

ng generate --help

## Compilación (Build)

Para compilar el proyecto y prepararlo para producción, ejecute:

ng build

Esto compilará el proyecto y guardará los archivos resultantes en el directorio dist/. Por defecto, la compilación de producción optimiza la aplicación para lograr el mejor rendimiento y velocidad.

## Pruebas Unitarias

Para ejecutar las pruebas unitarias utilizando el entorno de pruebas Vitest, use el siguiente comando:

ng test

## Pruebas End-to-End (E2E)

Para ejecutar pruebas de extremo a extremo, utilice:

ng e2e

## Recursos Adicionales

Para obtener más información sobre el uso de Angular CLI, incluyendo referencias detalladas de los comandos, visite la página de Angular CLI Overview and Command Reference (https://angular.dev/tools/cli).
