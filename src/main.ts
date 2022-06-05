import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
let nextKey = 0;
let keycodeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; //up up, down down, left right, left right, b, a

document.addEventListener('keydown', function (e) {
    if (e.keyCode === keycodeSequence[nextKey]) {
        nextKey++;
    } else {
        nextKey = 0;
    }
    if (nextKey === keycodeSequence.length) {
        alert("Mais, pourquoi tu fais ça ici ?")
        nextKey = 0;
    }
});