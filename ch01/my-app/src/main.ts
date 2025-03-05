import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// The startup method of an Angular application is called bootstrapping, and it is defined in the main.ts file inside the src folder

// The main tas of the bootstrapping file is to define the component that will be loaded at application startup.
