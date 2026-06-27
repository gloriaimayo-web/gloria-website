# Estado glservicesgroup.com — 25 jun 2026 (sesión cerrada)

## ✅ COMPLETADO Y EN VIVO
- Sitio estático en Vercel (local→GitHub→Vercel, repo gloria-website). Hostinger ya no se usa.
- Dominio glservicesgroup.com → Vercel (GoDaddy registro A: @ → 216.198.79.1). MX Outlook intacto. SSL/candado OK.
- Precios $120/$180/$50 CAD. Marca corregida a "AppointSuite". Botón "Ask AI" eliminado.
- Botón "See How It Works" → how-it-works.html. "Try a Real Booking Experience" → appointsuite.tech/book/smart-local-services-demo/.
- Cuadro demo (video) muestra aviso "próximamente" (video 2 min pendiente).
- Chatbot bilingüe FUNCIONANDO (izq) + WhatsApp (der). Backend: appointsuite.tech/messenger/glservicesgroup/message.
- 3 tarjetas: Vaughan Sewing (Live), Vivir Ligero (Live), Beauty Salon Medellín (Coming Soon).
- CSS muerto de "Ask AI" (.ai-fab, .ai-modal*, .ai-form, etc.) eliminado de index.html e index-es.html. Commit 773d41f.

## 🔧 Chatbot CORS (resuelto)
- Bug era el preflight OPTIONS bloqueado por django-cors-headers.
- FIX en .env de PythonAnywhere: CORS_ALLOWED_ORIGINS=https://glservicesgroup.com,https://www.glservicesgroup.com. Backup: .env.backup-2026-06-25.

## ✅ Verificado producción sana
- Slug Vaughan en PRODUCCIÓN = 'home-sewing' (coincide con views.py). /book/home-sewing/ → 200. No hay bug. (BD local dice 'vaughan-sewing' pero es solo dato local viejo, no afecta vivo.)

## 🔲 PENDIENTES — SESIÓN DEDICADA (tocan mini-crm/producción, con supervisión)
- "Color por negocio" (Camino B): cambios YA EMPEZADOS sin commitear en mini-crm: templates/booking/booking_page.html (parametrizado) + core/management/commands/set_demo_brand_color.py (azul #0078D4 para smart-local-services-demo). Falta: commit+push mini-crm, correr comando en prod, verificar visual.
  - Cosmético menor pendiente dentro de ese mismo cambio: la cajita ".slots-empty" (aviso "no hay horarios") quedó con su rosa fijo (#fff3f5/#f4c0cb), no se parametrizó — bajo impacto, opcional.
- ⚠️ RAILWAY: existen Procfile/railway.json/runtime.txt sin trackear en mini-crm. ENTENDER el mecanismo de deploy real ANTES de cualquier push a producción.
- Unificar CORS (quitar el manual de la vista, dejar solo middleware).

## 🔲 PENDIENTES SEGUROS (no tocan producción)
- Limpiar el mismo CSS muerto de "Ask AI" en las otras 12 páginas que aún lo tienen (about, contact, how-it-works, privacy, schedule, services — EN/ES). No se tocaron, fuera del alcance de la última tarea.
- Pulir ícono ▶️ del cuadro del demo (opcional, cosmético).

## 🔲 COMERCIAL
- Grabar video demo 2 min (Loom) para el cuadro "Watch the Demo".
