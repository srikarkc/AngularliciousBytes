###  Notes from Jan' 17, 2024 - Wednesday

To learn Angular, turns out you need to know a bit of HTML, CSS, & JavaScript. 

I've heard of those tools before so I think we should be good enough to get going with this.

Let's do this.


1. Need to make sure we have Node installed. `node --version`

Node.js is an open-source, cross-platform JavaScript runtime environment used for executing JavaScript outside of a web browser. It's used for building back-end services (API) and server-side applications.
Node is shorthand for node.js.

2. Install the latest version of Angular. `npm install -g @angular/cli`

---

`sudo npm install` and `ng serve`

1. In the 'src/' directory, we see the app's top level 'index.html' and 'style.css' files.
2. 'main.ts' is where the app starts running.

1. In the 'src/app/' sub-directory, we see 'app.component.ts' and 'app.component.css' files.
2. 'app.component.ts' is the source file that describes the 'app-root' component.

**Components** are the basic building blocks of Angular.

1. 'src/assets/' are the directory for storing images used by the app.

In the Hello World section, we updated the 'title' in index.html and then in the 'app.component.ts', we updated the template and also the title variable in the AppComponent class.

---

### I. Creating Home Component

`ng generate component home --inline-template --skip-tests`

The above command created a home sub-directory inside the 'src/app/' directory 

Need to add this component to the app root's component.

1. Add the following import line
`import { HomeComponent } from './home/home.component';`
2. In the imports section, add HomeComponent
```
imports: [
    HomeComponent
  ],
```

---

### II. Creating Housing Location Component

`ng generate component housingLocation --inline-template --skip-tests`

We add the above component to the home component's modules. Similar to how we added the home component to the root component's modules. We have an import statement at the top.

`import { HousingLocationComponent } from '../housing-location/housing-location.component';`

Then, we add it to the imports section

`imports: [CommonModule, HousingLocationComponent],`

Then, in the template section, addd the following which is the component name (as defined by the selector).

`<app-housing-location></app-housing-location>`

---

### III. Creating an interface

**Interfaces** are custom data types for your app.

In this section, we're creating an interface to represent properties that represent data about a single housing location.

`ng generate interface housinglocation`

The above command created a 'housinglocation.ts' file in 'src/app' directory.

We add properties to the interface separated by semi-colons(;).

e.g. id: number; name: string, etc.

After creating the interface, in 'home.component.ts', we created a sample home.

We imported the HousingLocation interface `import { HousingLocation } from '../housinglocation';`

Then, we used the following format for the HousingComponent
```
housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test City',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
```

---

### IV. Adding an input parameter to the component

`@Input()` and use it to pass data to a component

Inputs allow components to share data. The direction of data sharing is from Parent to Child component.

In the 'housing-location.component.ts', we imported 'Input' and 'HousingLocation'. Then, we added the following in the class definition:
`@Input() housingLocation!: HousingLocation;`

The above line created an housingLocation variable/property of type 'HousingLocation'.
The exclamation mark (!) is a non-null assertion operator and tells TypeScript compiler that the value of this property won't be null or undefined.

---

### V. Adding a property binding to a component's template

Property binding enables you to connect a variable to an @Input in an Angular template. The data is then dynamically bound to the @Input.

Property binding lets you set values for properties of HTMl elements or directives. 

We edit the <app-housing-location> tag in 'home.component.ts'

`<app-housing-location [housingLocation]="housingLocation"]></app-housing-location>`

The square bracket [] are used to represent the property binding. `[attribute] = "value"`

Let Angular know that the assigned value should be treated as a property from the component class and not a string value. The value on the right handside is the name of the property from the 'HomeComponent'.

---

### VI. Adding an interpolation to a component's template

`{{ expression }}`

---

### VII. Using *ngFor directives

**Directives** are classes that add additional behaviour to your Angular applications.

We created a list of housing locations (HousingLocation[]) and in the template, we used the '*ngFor' directive.
```
housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city
    }, ...
  ]; 
```
```
<app-housing-location 
  *ngFor="let housingLocation of housingLocationList"
  [housingLocation]="housingLocation">
</app-housing-location>
```

---

### VIII. Angular Services

App has a service to serve the data to your app. Services provide a way to separate Angular app data and functions that can be used by multiple components in the App. A service must be made injectable.

`ng generate service housing --skip-tests`

We copy over the 'housingLocationList' array over to the service and import the 'inject' and 'HousingService' in Home component.

Then, we update the 'HomeComponent'

```
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
```

---

### IX. Routing

`ng generate component details --inline-template --skip-tests`

1. Generate a 'details' component.
2. Added routing to the application. Added a route.ts file to the 'src/app' directory. 
3. In main.ts, we imported 'provideRouter' and 'routeConfig'. Added it to the list of providers.
4. In app.component.ts, we imported 'RouterModule' and included it in the imports section.
5. In the same file, we replaced '<app-home></app-home>' with '<router-outlet></router-outlet>'.
5. In the above created 'routes.ts' file, we imported Routes, HomeComponent, & DetailsComponent. Then, we created a variable 'routeConfig' and exported it.

```
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    }
];

export default routeConfig;
```

---

### X. Integrate the details page into the application

