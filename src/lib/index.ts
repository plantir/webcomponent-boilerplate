// place files you want to import through the `$lib` alias in this folder.
import '../app.pcss';
import { mount } from 'svelte';
import Button from './Button.svelte';
let AppButton = document.querySelector('app-button');
if (AppButton) {
	while (AppButton.firstChild && AppButton.lastChild) {
		AppButton.removeChild(AppButton.lastChild);
	}
	setTimeout(() => {
		mount(Button, {
			target: AppButton!
		});
	}, 2000);
}
