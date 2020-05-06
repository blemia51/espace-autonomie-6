<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  espace-autonomie-6-annuaire
</h1>

A (slightly) opinionated Gatsby Strapi boilerplate to get started fast. Stack includes:
* [Strapi](https://strapi.io/)
* [Bootstrap](https://getbootstrap.com/)
* [Reactstrap](https://reactstrap.github.io/)
* [Reactstrap-form-fields](https://github.com/jeremylynch/reactstrap-form-fields)
* [Reactstrap-json-nav](https://github.com/jeremylynch/reactstrap-json-nav)
* [React Icons](https://github.com/react-icons/react-icons)
* [Google Tag Manager](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-tagmanager)
* [gatsby-plugin-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify)
* [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/)
* [gatsby-plugin-facebook-pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)
* [gatsby-plugin-favicon](https://github.com/Creatiwity/gatsby-plugin-favicon)
* [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)


## 🚀 Quick start

### Install the Gatsby CLI
```
npm install -g gatsby-cli
```
> The above command installs Gatsby CLI globally on your machine.

### Clone this project and pull from develop
```
clone with HTTPS
git clone https://gitlab.com/apsulis/espace-autonomie-6-annuaire.git

clone with SSH
git clone git@gitlab.com:apsulis/espace-autonomie-6-annuaire.git

cd espace-autonomie-6-annuaire
git pull origin develop
```
### Install dependencies
```
npm install
```
### Start development server
```
gatsby develop
```
> Gatsby will start a hot-reloading development 
environment accessible by default at `http://localhost:8000`.

### Create a production build
```
gatsby build
```
> Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

### Serve the production build locally
```
gatsby serve
```
> Gatsby starts a local HTML server for testing your built site. Remember to build your site using gatsby build before using this command.

### Create a new site

```
gatsby new [<site-name> [<starter-url>]]

example:
gatsby new gatsby-strapi-website https://github.com/jeremylynch/gatsby-strapi-starter
```

* en cas de problème d'installation des packets npm du plugin sharp, modifier 
les versions de gatsby-plugin-sharp et gatsby-transformer-sharp 
dans le fichier `package.json` comme ci-dessous :
```
"dependencies": {
  ...
  "gatsby-plugin-sharp": "2.5.3",
  "gatsby-transformer-sharp": "2.4.3",
  ...
}
  ```
* supprimer le dossier `node_modules` et le fichier `package-lock.json` puis installer les dépendences :
```
npm install
```