# 🎮 RPG SYSTEM

Sistema RPG en consola desarrollado con JavaScript y Node.js.

Este proyecto permite crear y administrar un jugador dentro del reino de **JavaScriptia**, donde podrás atacar enemigos, curarte, manejar inventario y administrar enemigos usando distintos conceptos fundamentales de JavaScript.

---

# 🚀 Tecnologías utilizadas

- JavaScript
- Node.js
- prompt-sync

---

# 📦 Instalación

## 1️⃣ Clonar o crear el proyecto

```bash
mkdir rpg-system
cd rpg-system
```

---

## 2️⃣ Inicializar Node.js

```bash
npm init -y
```

---

## 3️⃣ Instalar dependencias

```bash
npm install prompt-sync
```

---

# ▶️ Ejecutar el proyecto

```bash
node app.js
```

---

# 📂 Estructura del proyecto

```bash
rpg-system/
│
├── app.js
├── package.json
└── README.md
```

---

# 🧠 Conceptos aplicados

Este proyecto utiliza:

- ✅ Variables
- ✅ Objetos
- ✅ Arrays
- ✅ Constructor Functions
- ✅ Funciones
- ✅ Loops (`for`, `do while`)
- ✅ Condicionales
- ✅ Métodos personalizados
- ✅ Arrays de objetos
- ✅ `Math.random()`
- ✅ `Math.min()`
- ✅ `typeof`
- ✅ Conversión de tipos
- ✅ Template literals
- ✅ `push()`
- ✅ `pop()`
- ✅ `find()`
- ✅ `filter()`
- ✅ `map()`
- ✅ `prompt-sync`

---

# ⚔️ Funcionalidades

## 👤 Jugador

El jugador puede:

- Ver estadísticas
- Atacar enemigos
- Curarse
- Agregar items
- Eliminar items
- Ver inventario

---

## 👾 Enemigos

El sistema permite:

- Agregar enemigos
- Ver enemigos
- Buscar enemigos por nombre
- Filtrar enemigos fuertes
- Mostrar nombres en mayúsculas

---

# 🛠️ Constructor Function

El proyecto usa una función constructora llamada:

```js
function Player(name, level, hp, atk, weapon)
```

Cada jugador posee:

| Propiedad | Tipo |
|---|---|
| name | string |
| level | number |
| hp | number |
| atk | number |
| weapon | string |
| inventory | array |
| maxHp | number |

---

# ⚔️ Métodos del jugador

## ✅ describe()

Muestra información completa del jugador.

### Ejemplo

```bash
Hackerman (Lv. 5) - HP: 100/100 - Weapon: Sword
```

---

## ✅ attack()

Genera daño aleatorio usando:

```js
Math.random()
```

### Ejemplo

```bash
Hackerman ataca con Sword e inflige 14 de daño.
```

---

## ✅ heal(amount)

Cura vida usando:

```js
Math.min()
```

Evita superar el HP máximo.

---

## ✅ addItem(item)

Agrega items al inventario usando:

```js
push()
```

---

## ✅ removeItem()

Elimina el último item usando:

```js
pop()
```

---

# 🔍 Métodos de arrays utilizados

## ✅ find()

Busca enemigos por nombre.

```js
enemies.find()
```

---

## ✅ filter()

Filtra enemigos fuertes.

```js
enemy.level >= 10
```

---

## ✅ map()

Transforma nombres a mayúsculas.

```js
enemy.name.toUpperCase()
```

---

# 🧪 Uso de typeof

El programa muestra ejemplos como:

```js
typeof player.name
typeof player.hp
typeof player.attack
```

---

# 🔢 Conversión de tipos

Los datos ingresados desde terminal son convertidos usando:

```js
Number()
parseInt()
parseFloat()
```

---

# 🎮 Menú del sistema

```bash
===== RPG SYSTEM =====

1. Ver jugador
2. Atacar
3. Curarse
4. Agregar item
5. Ver inventario
6. Agregar enemigo
7. Ver enemigos
8. Buscar enemigo
9. Filtrar enemigos fuertes
10. Mostrar nombres MAYÚSCULAS
11. Eliminar último item
0. Salir
```

---

# 📸 Ejemplo de uso

```bash
Selecciona una opción: 1

Hackerman (Lv. 5) - HP: 100/100 - Weapon: Sword
```

---

# 📦 package.json

```json
{
  "type": "module",
  "dependencies": {
    "prompt-sync": "^4.2.0"
  }
}
```

---

# 👩‍💻 Autor

Miussete Alfaro
Zuelem Chañillao
Fernando Cuevas
Matias Flores
Monserrat Miranda
Alonso Morales
