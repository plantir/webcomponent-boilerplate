import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	build: {
		minify: true,
		lib: {
			name: 'lead-form',
			entry: 'src/lib/index.ts'
		},
		rollupOptions: {
			output: {
				assetFileNames: `assets/web-component.css`,
				entryFileNames: 'assets/web-component.js'
			}
		}
	},
	plugins: [svelte()]
});
