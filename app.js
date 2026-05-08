import promptSync from "prompt-sync";

const prompt = promptSync();

// ==========================
// 1️⃣ CONSTRUCTOR PLAYER
// ==========================

function Player(name, level, hp, atk, weapon) {
this.name = name;
this.level = Number(level);
this.hp = Number(hp);
this.maxHp = Number(hp);
this.atk = Number(atk);
this.weapon = weapon;
this.inventory = [];

// 2️⃣ MÉTODOS OBLIGATORIOS
this.describe = function () {
return `${this.name} (Lv. ${this.level}) - HP: ${this.hp}/${this.maxHp} - Weapon: ${this.weapon}`;
};

this.attack = function () {
const damage = Math.floor(Math.random() * this.atk) + 1;
return `${this.name} ataca con ${this.weapon} e inflige ${damage} de daño.`;
};

this.heal = function (amount) {
const healAmount = Number(amount);
this.hp = Math.min(this.hp + healAmount, this.maxHp);
return `${this.name} se curó ${healAmount} HP.`;
};

this.addItem = function (item) {
this.inventory.push(item);
return `${item} agregado al inventario.`;
};

this.removeItem = function () {
const removedItem = this.inventory.pop();
if (removedItem) {
return `${removedItem} eliminado del inventario.`;
}
return "Inventario vacío.";
};
}

// ==========================
// INICIALIZACIÓN (Debe ir antes del typeof)
// ==========================

const player = new Player("Hackerman", 5, 100, 20, "Sword");
const enemies = [];

// ==========================
// 6️⃣ REQUISITO: TYPEOF
// ==========================

console.log("\n===== INSPECCIÓN DE TIPOS (typeof) =====");
console.log("Tipo de player.name:", typeof player.name);
console.log("Tipo de player.hp:", typeof player.hp);
console.log("Tipo de player.attack:", typeof player.attack);
console.log("========================================");

// ==========================
// 4️⃣ MENÚ PRINCIPAL
// ==========================

let option;

do {
console.log(`
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
`);

// 7️⃣ CONVERSIÓN DE TIPOS (parseInt)
option = parseInt(prompt("Selecciona una opción: "));

if (option === 1) {
console.log(player.describe());
} else if (option === 2) {
console.log(player.attack());
} else if (option === 3) {
// 7️⃣ CONVERSIÓN DE TIPOS (parseFloat)
const amount = parseFloat(prompt("¿Cuánto HP quieres curar?: "));
console.log(player.heal(amount));
} else if (option === 4) {
const item = prompt("Nombre del item: ");
console.log(player.addItem(item));
} else if (option === 5) {
if (player.inventory.length === 0) {
console.log("Inventario vacío.");
} else {
console.log("Inventario:");
for (let i = 0; i < player.inventory.length; i++) {
console.log(`${i + 1}. ${player.inventory[i]}`);
}
}
} else if (option === 6) {
const name = prompt("Nombre del enemigo: ");
const hp = Number(prompt("HP del enemigo: "));
const atk = Number(prompt("ATK del enemigo: "));
const level = Number(prompt("Nivel del enemigo: "));
enemies.push({ name, hp, atk, level });
console.log(`Enemigo ${name} agregado.`);
} else if (option === 7) {
if (enemies.length === 0) {
console.log("No hay enemigos registrados.");
} else {
enemies.forEach((e, i) => {
console.log(`${i + 1}. ${e.name} - HP: ${e.hp} - Lv. ${e.level}`);
});
}
} else if (option === 8) {
// 5️⃣ FUNCIONALIDADES DE ARRAYS (.find)
const searchName = prompt("Enemigo a buscar: ");
const found = enemies.find(e => e.name.toLowerCase() === searchName.toLowerCase());
console.log(found ? `Encontrado: ${found.name}` : "No encontrado.");
} else if (option === 9) {
// 5️⃣ FUNCIONALIDADES DE ARRAYS (.filter)
const strong = enemies.filter(e => e.level >= 10);
console.log("Enemigos fuertes:", strong);
} else if (option === 10) {
// 5️⃣ FUNCIONALIDADES DE ARRAYS (.map)
const uppers = enemies.map(e => e.name.toUpperCase());
console.log("Nombres:", uppers);
} else if (option === 11) {
console.log(player.removeItem());
} else if (option === 0) {
console.log("Saliendo del Reino de JavaScriptia...");
} else {
console.log("Opción inválida.");
}

// ==========================
// PAUSA VISUAL (El truco para que no se borre)
// ==========================
if (option !== 0) {
prompt("\nPresiona Enter para continuar...");
console.clear();
}

} while (option !== 0);