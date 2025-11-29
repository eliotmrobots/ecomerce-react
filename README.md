# DeppTechno - E-commerce de Tecnología

Tienda online de productos tecnológicos desarrollada con React y Firebase.

## 🚀 Descripción

Aplicación web de e-commerce que permite navegar por un catálogo de productos tecnológicos, ver detalles de cada producto, agregar items al carrito de compras y gestionar las compras.

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida para proyectos web modernos
- **Firebase/Firestore** - Base de datos en la nube para almacenar productos
- **React Router** - Navegación entre páginas (SPA)
- **Lucide React** - Iconos
- **CSS** - Estilos personalizados

## ✨ Funcionalidades

- 📦 Catálogo de productos obtenido desde Firebase
- 🔍 Vista detallada de cada producto
- 🛒 Carrito de compras con Context API
- ➕ Agregar/eliminar productos del carrito
- 🔢 Modificar cantidades con validación de stock
- 📱 Navegación fluida sin recargas (SPA)
- 🎨 Interfaz moderna y responsive

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── cards/              # Componentes de tarjetas (productos, carrito)
│   ├── Context/            # Context API para estado global del carrito
│   ├── Navbar/             # Barra de navegación
│   ├── CartWidget/         # Icono del carrito con contador
│   ├── itemListContainer/  # Listado de productos
│   ├── footer/             # Footer de la página
│   └── pages/              # Páginas de la aplicación
├── firebase/
│   └── config.js           # Configuración de Firebase
└── App.jsx                 # Componente principal
```

## 🚦 Instalación y Uso

1. Clonar el repositorio

```bash
git clone https://github.com/eliotmrobots/ecomerce-react.git
```

2. Instalar dependencias

```bash
npm install
```

3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

4. Abrir en el navegador: `http://localhost:5173`

## 🔥 Configuración de Firebase

El proyecto utiliza Firebase Firestore. Asegúrate de tener configuradas las credenciales en `src/firebase/config.js`.

## 👨‍💻 Autor

**Diego Veliz**

## 📝 Notas

Proyecto desarrollado como entrega final del curso de React en Coderhouse.
