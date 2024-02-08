import App from "./App.vue";
import { routes } from "~/router";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { ViteSSG } from "vite-ssg";

export const createApp = ViteSSG(App, { routes }, ({ app, router, routes, isClient, initialState }) => {
  router.beforeEach((to, from, next) => {
    // Redirect if the user somehow entered /downloads with no category selected /downloads/:song
    if (to.name === "downloads" && !to.params.category) return next({ name: to.name, params: { category: "songs" } });
    return next(); 
  });
});
