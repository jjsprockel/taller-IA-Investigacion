# Taller IA en Investigación en Salud — FUCS / ProfundaMente

Sitio web estático del curso **"Introducción a la IA con aplicación a la investigación clínica y epidemiológica"**, desarrollado en el Programa GLORIA de la Universidad FUCS / Laboratorio ProfundaMente.

## Contenido

- **6 sesiones** prácticas (1, 2A, 2B, 3A, 3B, 4) con bloques, minutajes, prompts y código Python.
- Botón **Copiar** en cada prompt y bloque de código.
- **Checklists** de productos con persistencia en `localStorage`.
- Página global de **Requisitos e instrucciones**.
- Diseño responsive con paleta institucional FUCS.

## Despliegue en GitHub Pages (gratuito)

### Pasos

1. **Crear cuenta en GitHub** (si no se tiene): [github.com](https://github.com)

2. **Crear un repositorio público** nuevo, por ejemplo `taller-ia-salud-fucs`.

3. **Subir los archivos** a la raíz del repositorio.

   **Opción A — Por la web:**
   En el repositorio: botón *Add file → Upload files* → arrastra toda la carpeta del proyecto.

   **Opción B — Con Git (terminal):**
   ```bash
   git init
   git add .
   git commit -m "Sitio del taller IA en investigación en salud"
   git branch -M main
   git remote add origin https://github.com/USUARIO/taller-ia-salud-fucs.git
   git push -u origin main
   ```

4. **Activar GitHub Pages:**
   Ir a *Settings → Pages → Build and deployment → Source: "Deploy from a branch"*,
   rama `main`, carpeta `/ (root)` → **Save**.

5. **Esperar ~1 minuto.** El sitio quedará disponible en:
   ```
   https://USUARIO.github.io/taller-ia-salud-fucs/
   ```

6. **Para actualizar:** subir nuevos cambios (commit/push) y Pages se redespliega automáticamente.

### Notas técnicas

- El archivo `.nojekyll` en la raíz garantiza que GitHub Pages no procese los archivos con Jekyll, lo que podría ignorar carpetas con guion bajo.
- Todas las rutas son **relativas** (sin `/` inicial) para que funcionen correctamente en el subdirectorio de GitHub Pages.
- No se requiere ningún paso de compilación: el sitio es 100% HTML + CSS + JavaScript puro.

---

**Docente responsable:** John Jaime Sprockel, MD ESP, MSc, MBA — Director Laboratorio ProfundaMente
