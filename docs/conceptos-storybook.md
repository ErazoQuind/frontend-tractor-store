# Documentación: Entendiendo Storybook y Configuración Arquitectónica

Este documento resume los conceptos clave de la interfaz de Storybook y las configuraciones arquitectónicas avanzadas aplicadas durante la **Fase 5** del proyecto Tractor Store, específicamente para el entorno de Micro-Frontends (Nx + Angular).

---

## 1. ¿Qué es Storybook y cómo se compone su interfaz?

**Storybook** es un "laboratorio aislado" o catálogo interactivo para componentes UI. Permite desarrollar, documentar y probar componentes visuales (como botones o tarjetas) de forma aislada, sin necesidad de levantar o navegar por la aplicación completa.

La interfaz principal de Storybook se divide en tres áreas clave:

1. **Panel Izquierdo (Explorador de Historias):** Muestra el árbol de componentes documentados (ej. `Design System > Button`). Debajo de cada componente están sus **Stories (Historias)**. Una historia no es más que un "estado guardado" del componente (por ejemplo: el estado "Primario" verde, o el estado "Secundario" gris).
2. **Lienzo Central (Canvas):** Es el área donde se renderiza el componente real. No es una imagen estática; es código HTML/Angular vivo ejecutándose en el navegador.
3. **Panel Inferior (Addons / Controls):** Es el panel de control dinámico. Storybook lee automáticamente los decoradores `@Input()` del código del componente (ej. `@Input() label`) y genera controles visuales (cajas de texto, menús desplegables) para que cualquier persona pueda modificar las propiedades en tiempo real y ver cómo reacciona el componente en el lienzo.

---

## 2. Decisiones de Arquitectura y Resolución de Problemas

Durante la configuración inicial de nuestro Design System (`ts-design-system`), resolvimos dos retos técnicos fundamentales para garantizar la escalabilidad del monorepo:

### A. Estandarización de Selectores

- **El Problema:** Por defecto, el linter de Angular/Nx (`@angular-eslint/component-selector`) exige que todos los componentes dentro de librerías utilicen el prefijo genérico `lib-` (ej. `<lib-button>`).
- **La Solución:** Para mantener una identidad de marca coherente con nuestro **T**ractor **S**tore, modificamos las reglas de ESLint en `packages/ts-design-system/eslint.config.mjs` para exigir el prefijo **`ts-`**.
- **Impacto:** Refactorizamos los selectores para usar `<ts-button>`. Esto mejora la legibilidad del HTML y estandariza los componentes a nivel empresarial.

### B. Conexión de Estilos Globales

- **El Problema:** Las versiones modernas de Storybook y Angular chocan si se utiliza el motor de compilación antiguo (Webpack). Además, si Storybook se compila de forma aislada, **desconoce la existencia de Tailwind CSS y los Design Tokens**, renderizando componentes sin estilos (rotos visualmente).
- **La Solución:** 1. Modificamos el archivo `project.json` del Design System para utilizar el ejecutor nativo moderno de Angular para Storybook. 2. Configuramos la propiedad clave `"browserTarget": "shell:build"`.
- **Impacto:** Al declarar el `browserTarget` apuntando al _Shell_, le ordenamos a Storybook que, al compilar los componentes de la librería, **inyecte toda la configuración de CSS global y Tailwind proveniente de la aplicación principal**. Gracias a esto, el componente aislado en Storybook se renderiza exactamente con los mismos colores y tipografías (Design Tokens) que tendrá en producción.
