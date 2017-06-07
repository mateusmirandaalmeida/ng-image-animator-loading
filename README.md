# NgImageAnimatorLoading - AngularJs

[![N|Solid](http://www.cloudesign.com/images/angular.png)](https://nodesource.com/products/nsolid)

Create animations while your images are loading.

### Developers   
  - Mateus Miranda (info.mateusmiranda@gmail.com)
  - Willian Marques Freire (willianmarquesfreire@gmail.com)
  - See faype.com

### Pre requirements

| Plugin | README |
| ------ | ------ |
| AngularJs | https://angularjs.org/ |

# Installation

```sh
$  bower install ng-image-animator-loading --save
$  npm install ng-image-animator-loading --save
```    

Put in your code the following script:

```html
 <script src="bower_components/ng-image-animator-loading/dist/ng-image-animator-loading.min.js"></script>
 <script src="node_modules/ng-image-animator-loading/dist/ng-image-animator-loading.min.js"></script>
```    

Are you ready to start?

# Usage

```html
 <img animator-loading="https://goo.gl/jBNT0M"
      background="#9B59B6"
      width="200"
      height="200"/>
```    

### Attributes

| Attribute | Description | Value |
| ------ | ------ | ------ |
| animator-loading | Component call | Path of the image to be displayed
| background | Change the loading background | One color code
