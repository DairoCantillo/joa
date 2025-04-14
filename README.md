# 🌐 Joa.io - Acortador de URLs Moderno 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC.svg)](https://tailwindcss.com/)

## 📋 Descripción

Joa.io es un servicio moderno de acortamiento de URLs con estadísticas avanzadas, panel de control personalizado y diseño elegante. Permite a los usuarios crear, gestionar y analizar enlaces cortos fácilmente.

![Joa.io Screenshot](Screenshot.png)

## ✨ Características Principales

- ✂️ **Acortamiento de URLs** - Genera URL cortas fáciles de compartir
- 📊 **Estadísticas detalladas** - Seguimiento de clics, ubicación geográfica, navegador y dispositivo
- 🔒 **Autenticación segura** - Registro y acceso de usuarios con varias opciones
- 🎨 **Diseño adaptativo** - Experiencia optimizada para móviles y escritorio
- 🌙 **Modo oscuro** - Interfaz adaptable a las preferencias de iluminación
- 🚀 **Rendimiento optimizado** - Carga rápida gracias a Next.js

## 🚀 Cómo Empezar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/joa.git
   cd joa
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   ```bash
   cp .env.example .env.local
   ```

   Edita el archivo `.env.local` con tus configuraciones.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📂 Estructura del Proyecto

```
/src
├── app                    # Rutas y páginas basadas en App Router de Next.js
│   ├── [token]            # Página de redirección de URL acortada
│   ├── auth               # Páginas de autenticación
│   └── dashboard          # Panel de control del usuario
├── components             # Componentes reutilizables
│   ├── features           # Componentes de funcionalidades principales
│   ├── layout             # Componentes de estructura (header, footer)
│   ├── shared             # Componentes compartidos en toda la app
│   └── ui                 # Componentes básicos de UI
├── constants              # Constantes y configuraciones
├── hooks                  # Custom hooks de React
├── interceptors           # Interceptores para peticiones API
├── services               # Servicios para interactuar con APIs
│   └── api                # Cliente API y configuraciones
├── styles                 # Estilos globales y configuración de Tailwind
├── types                  # Definiciones de TypeScript
└── utils                  # Funciones y utilitarios
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/) - Framework React para aplicaciones web con SSR y SSG
  - [TypeScript](https://www.typescriptlang.org/) - Tipado estático para JavaScript
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilityFirst para diseño rápido
  - [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animaciones
  - [Axios](https://axios-http.com/) - Cliente HTTP para peticiones API
- **Herramientas de Desarrollo**:
  - [ESLint](https://eslint.org/) - Linter para mantener código consistente
  - [Prettier](https://prettier.io/) - Formateador de código
  - [CommitLint](https://commitlint.js.org/) - Validación de mensajes de commit

## 📈 Roadmap

- [ ] Integración con APIs de redes sociales
- [ ] Personalización de URLs cortas
- [ ] Compartir directamente en plataformas sociales
- [ ] Etiquetas y organización de URLs
- [ ] Exportación de reportes

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'feat: añadir nueva funcionalidad'`).
4. Haz un push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la licencia [CC BY-NC 4.0](./LICENSE).
