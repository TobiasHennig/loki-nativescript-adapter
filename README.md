# Loki NativeScript adapter

> A Loki adapter for NativeScript apps.

## What is Loki

> LokiJS is a document oriented database written in javascript, published under MIT License. Its purpose is to store javascript objects as documents in a nosql fashion and retrieve them with a similar mechanism. - [LokiJS](https://github.com/techfort/LokiJS)

## Demo
Watch the example application on [YouTube](https://www.youtube.com/watch?v=EiVWoVq2tuk)

## Installation

Run the following command from the `/app` directory of your project:

```
$ npm install lokijs --save
$ npm install loki-nativescript-adapter --save
```

## Usage

```js
// Requirements
var fs = require("file-system");
var Loki = require("./node_modules/lokijs/src/lokijs.js");
var LokiNativeScriptAdapter = require("./node_modules/loki-nativescript-adapter/loki-nativescript-adapter.js");

// Setup Loki
var path = fs.path.join(fs.knownFolders.currentApp().path, "database.db");
var db = new Loki(path, {
    adapter: new LokiNativeScriptAdapter()
});

// Save some movies
var movies = db.addCollection("movies");
movies.insert({ title: "Ghost Busters", year: 1984 });
movies.insert({ title: "Ghost Busters II", year: 1989 });
movies.insert({ title: "Ghost Busters", year: 2016 });
console.log(movies.data);
db.saveDatabase();

// Load and find some movies
db.loadDatabase({}, function() {
    var movies = db.getCollection("movies");
    console.log(movies.find({ title: "Ghost Busters" }));
});
```

To go deeper in [Loki](http://lokijs.org) have a look at the [documentation](http://lokijs.org/#/docs).

[![npm version](https://badge.fury.io/js/loki-nativescript-adapter.svg)](http://badge.fury.io/js/loki-nativescript-adapter)