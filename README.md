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

### Creating Home Component

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
