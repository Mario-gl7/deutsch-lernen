# 🇩🇪 Deutsch Lernen — PWA

App offline para aprender alemán con vocabulario, parejas y crucigrama.  
Autenticación con Supabase · Instalable en iPhone/iPad.

---

## 🚀 Puesta en marcha (una sola vez)

### Paso 1 — Crear proyecto en Supabase

1. Ve a **[supabase.com](https://supabase.com)** → "Start your project" (gratis)
2. Crea una organización y un proyecto nuevo
   - Nombre: `deutsch-lernen` (o el que quieras)
   - Contraseña de base de datos: guárdala en algún sitio seguro
   - Región: Europe (Frankfurt) — la más cercana
3. Espera ~2 minutos a que el proyecto arranque

### Paso 2 — Ejecutar el script SQL

1. En tu proyecto Supabase → **SQL Editor** → "New query"
2. Pega el contenido de `supabase-setup.sql` y pulsa **Run**
3. Verás el mensaje "Success" — esto crea la whitelist de correos y el bloqueo de registros no autorizados

### Paso 3 — Invitar a los dos usuarios

1. En Supabase → **Authentication** → **Users** → "Invite user"
2. Invita: `mariogutierrezlopez@icloud.com`
3. Invita: `majasplete@web.de`
4. Cada usuario recibirá un correo con un enlace para establecer su contraseña

> ⚠️ El enlace del correo lleva a tu URL de Supabase, no a tu app.  
> Los usuarios deben establecer su contraseña haciendo clic en ese enlace,  
> y después ya pueden entrar desde la app normalmente.

### Paso 4 — Conectar la app con Supabase

1. En Supabase → **Settings** → **API**
2. Copia:
   - **Project URL** → `https://xxxxxxxxxxxx.supabase.co`
   - **anon / public key** → cadena larga que empieza por `eyJ...`
3. Abre `index.html` y busca estas dos líneas (arriba del todo en el `<script>`):

```js
const SUPABASE_URL = 'SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = 'SUPABASE_ANON_KEY_HERE';
```

4. Reemplaza `SUPABASE_URL_HERE` y `SUPABASE_ANON_KEY_HERE` con tus valores reales

### Paso 5 — Subir a GitHub Pages

1. En tu repositorio de GitHub → sube el `index.html` actualizado
2. Settings → Pages → Source: `main` branch, carpeta `/ (root)`
3. La URL quedará: `https://TU_USUARIO.github.io/NOMBRE_REPO`

### Paso 6 — Configurar la URL de redirección en Supabase

Para que los correos de invitación lleven al sitio correcto:

1. Supabase → **Authentication** → **URL Configuration**
2. **Site URL**: `https://TU_USUARIO.github.io/NOMBRE_REPO`
3. **Redirect URLs**: añade `https://TU_USUARIO.github.io/NOMBRE_REPO`

---

## ➕ Añadir más usuarios en el futuro

Tienes dos opciones:

**Opción A — SQL (recomendado):**
```sql
-- En Supabase → SQL Editor
INSERT INTO allowed_emails (email) VALUES ('nuevo@correo.com');
```
Luego ve a Authentication → Users → Invite user con ese correo.

**Opción B — Desde el panel:**
1. Authentication → Users → Invite user (introduce el correo nuevo)
2. SQL Editor → ejecuta el INSERT de arriba para añadirlo a la whitelist

---

## 📱 Instalar en iPhone / iPad

1. Abre la URL de tu GitHub Pages en **Safari**
2. Botón Compartir ⬆️ → **"Añadir a pantalla de inicio"**
3. Confirma → la app queda instalada y funciona **offline**

Los datos (vocabulario) se guardan en el dispositivo (localStorage),  
vinculados al correo de cada usuario.

---

## 📁 Estructura del repositorio

```
/
├── index.html          ← App completa (PWA + auth + juegos)
├── supabase-setup.sql  ← Script SQL para configurar Supabase
└── README.md           ← Esta guía
```

---

## 🔒 Seguridad

- La autenticación la gestiona **Supabase** (JWT tokens, sesiones seguras)
- La `anon key` es pública por diseño — solo permite login, no acceso a datos privados
- El trigger SQL bloquea cualquier registro de emails no autorizados
- Los datos del vocabulario se guardan **localmente** en cada dispositivo
- Sin backend propio que mantener
