# Documentación: Pruebas de Regresión Visual con Chromatic

Este documento detalla la implementación de **Chromatic** en la arquitectura del proyecto Tractor Store (Fase 5), como herramienta automatizada para la protección de la interfaz de usuario (UI) y el Design System.

---

## 1. ¿Qué es Chromatic y por qué lo necesitamos?

Chromatic es un servicio en la nube para automatizar **Pruebas de Regresión Visual** (Visual Regression Testing), creado por los mismos desarrolladores de Storybook.

En una arquitectura de Micro-Frontends compartida, un pequeño cambio en el CSS global o en un componente base (como un botón) puede tener efectos colaterales catastróficos en múltiples aplicaciones.

**¿Cómo funciona?**

1. **Snapshots:** Chromatic se conecta a nuestro Storybook, lo renderiza en sus propios servidores y toma capturas de pantalla (fotografías exactas a nivel de píxel) de cada estado de nuestros componentes.
2. **Baseline (Línea Base):** La primera vez que subimos nuestro código, esas fotografías se guardan como la "fuente de la verdad" o _Baseline_.
3. **Comparación:** En cada _commit_ o _Pull Request_ futuro, Chromatic toma nuevas fotos y las superpone con el _Baseline_.
4. **Prevención:** Si detecta que un píxel cambió (por ejemplo, un padding más grande o un color distinto), bloquea el despliegue y exige que un desarrollador apruebe el cambio explícitamente o corrija el error.

---

## 2. Instalación en el Monorepo (Nx)

Al ser una herramienta de infraestructura que analiza el proyecto completo, Chromatic se instala en la raíz del _workspace_ de pnpm:

```bash
pnpm add -D chromatic -w
```

---

## 3. Configuración y Conexión

Para vincular el código local con la nube de Chromatic de forma segura:

1. Se crea un proyecto en [chromatic.com](https://www.chromatic.com/).
2. Se enlaza el repositorio mediante la cuenta de **GitHub**.
3. Chromatic genera un **Project Token** único para autorizar las subidas desde nuestra terminal o desde nuestro sistema de Integración Continua (CI/CD).

---

## 4. Publicación del Baseline

El comando fundamental para ejecutar las pruebas y publicar Storybook en la nube es:

```bash
npx chromatic --project-token=TU_TOKEN_SECRETO
```

**Resultados de esta ejecución:**

- Compila una versión estática de Storybook (`build-storybook`).
- Sube los _assets_ a la infraestructura de Chromatic.
- Establece el estado actual de los componentes (`ts-button`, `ts-product-card`, `ts-mini-cart`, `ts-variant-option`) como el estándar oficial (Baseline) de la empresa.
- Genera una URL pública/privada donde el equipo de diseño y producto puede revisar el catálogo de componentes en vivo.
