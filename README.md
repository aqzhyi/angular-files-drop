# angular-files-drop

> Easily drag files to element and drop them using html5 api.

> Angular and html5 native, No jQuery, No dependency.

[Live Demo](http://jsbin.com/kawupikano/1/)

## Install

> installing via javascript package manager

```sh
npm install angular-files-drop -S
```

> load via module loader such as jspm, system, webpack, etc, or just include `<script src="xxx.js">`

```html
<script src="./node_modules/angular-files-drop/dist/index.js"></script>
```

> Set dependency to your angular app

```js
angular.module('demoApp', ['angular-files-drop', ...])
```

## Usage

#### tl;dr

```html
<!-- in html -->
<div files-drop="onFilesDropped($files, $event)">Drop here!</div>
```

```js
// in controller
function DemoController($scope) {
  $scope.onFilesDropped = function($files, $event) {
    console.log('$files', $files)
    console.log('$event', $event)

    $scope.previews = $files // array that contain file instances
  }
}
```

```css
/* in css */
.filesDrop.filesDrop--dragover {
  outline: 1px solid #999;
}
```

#### Long (work demo)

```html
<!-- in html -->
<body ng-controller="DemoController">
  <div style="height:300px; width:100%; border:3px solid red;" files-drop="onFilesDropped($files, $event)">
    <span style="color:orange;">files-drop="onFilesDropped($files, $event)"</span>
    Hey, drop files here!
    <hr>
    <img ng-src="{{img.dataURL}}" ng-repeat="img in previews" height="100" width="100" style="object-fit:contain; background: #eee; margin:10px; border:1px solid #999;">
  </div>
</body>
```

```js
// in controller
angular.module('demoApp', ['angular-files-drop'])
angular.module('demoApp').controller('DemoController', function($scope) {
  $scope.onFilesDropped = function($files, $event) {
    console.log('$files', $files)
    console.log('$event', $event)

    $scope.previews = $files // array that contain file instances
  }
})

angular.bootstrap(document, ['demoApp'])
```

```css
/*
  when you `dragover` the element, it will be apply .files-drop--dragover to it.
*/
.filesDrop.filesDrop--dragover {
  outline: 1px solid #999;
}
```

## You want to develop, build, and see demo site locally

> launch demo site using node

```sh
# shell
npm install http-server -g
PORT=12345 http-server .
open http://127.0.0.1:12345/demo
```

> preview

![](http://i.imgur.com/YOfWAep.png)
