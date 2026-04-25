# Fires de Catalunya 🔥

Aplicación web desarrollada con Angular que permite explorar ferias de Catalunya, filtrarlas por comarca y gestionar una lista de favoritas.

---

## 📌 Descripción

Esta aplicación permite a los usuarios:

- Visualizar un listado de ferias de Catalunya
- Filtrar ferias por comarca
- Consultar el detalle de cada feria
- Añadir o eliminar ferias de favoritos
- Guardar favoritos en el navegador (LocalStorage)
- Ver las favoritas en una página dedicada y en un panel lateral dinámico

---

## 🚀 Tecnologías utilizadas

- Angular 21
- TypeScript
- HTML5
- CSS3
- LocalStorage

---

## 🧱 Estructura del proyecto

src/app/

├── model/
│   └── fairs.ts

├── view/
│   ├── components/
│   │   ├── header/
│   │   ├── fair-card/
│   │   └── favorites-panel/
│
│   └── pages/
│       ├── home/
│       ├── fairs/
│       ├── favorites/
│       └── fair-detail/

├── app.routes.ts
└── app.ts

---

## 🧩 Funcionalidades principales

### 🔎 Filtrado por comarca
- Selección de comarca mediante un desplegable
- Muestra únicamente las ferias de la comarca seleccionada

### ⭐ Gestión de favoritos
- Añadir o eliminar ferias de favoritos
- Persistencia mediante LocalStorage
- Contador de favoritos en la interfaz

### 📄 Vista detalle
- Acceso a información completa de cada feria
- Navegación mediante rutas dinámicas (`/fair/:id`)

### 📦 Panel lateral de favoritos
- Sidebar desplegable
- Actualización en tiempo real
- Scroll automático si hay muchos elementos

### 🧱 Componentización
- `fair-card`: tarjeta reutilizable
- `favorites-panel`: panel lateral
- `header`: navegación
- Separación clara entre páginas y componentes

---

## 🎨 Interfaz

- Diseño limpio y moderno
- Tarjetas visuales para cada feria
- Header con navegación
- Home elegante con acceso directo a las ferias
- Botón con badge para mostrar el número de favoritos

---

## 💾 Persistencia de datos

Se utiliza `LocalStorage` para:
- Guardar ferias favoritas
- Mantener los datos entre recargas de página

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/tu-usuario/tu-repo.git

2. Acceder al proyecto:

cd fires-catalunya

3. Instalar dependencias:

npm install

4. Ejecutar la aplicación:

ng serve

5. Abrir en el navegador:

http://localhost:4200

---

## 🎯 Objetivo académico

Este proyecto ha sido desarrollado como parte de la asignatura de Desarrollo Web Moderno (DWM), aplicando conceptos como:

- Componentes en Angular
- Data Binding
- Routing
- Comunicación entre componentes
- Manipulación del DOM
- Uso de LocalStorage
- Organización y estructura de proyecto

---

## 🏁 Estado del proyecto

✔ Funcionalidad completa  
✔ Interfaz cuidada  
✔ Componentización aplicada  
✔ Extras implementados  

---

## ✨ Posibles mejoras futuras

- Buscador de ferias
- Persistir filtros seleccionados
- Animaciones en el sidebar
- Consumo de API externa
- Diseño responsive mejorado

---

## 👨‍💻 Autor

Proyecto realizado por: **Juan Martín**
