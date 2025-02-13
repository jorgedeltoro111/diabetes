import { writable } from "svelte/store";
//aqui creamos 2 variables que vamos a poder reutilizar
export const user = writable({});
export const isLoggedIn = writable(false);