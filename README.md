# [LightItem](http://hankchiu.tw/LightItem)
=======

[LightItem](http://hankchiu.tw/LightItem) is a javascript library for light box effect. It is pure native javascript code and CSS. You can use it with any third party libraries by yourself.

## Getting Started
-------
Just include LightItem.js and LightItem.css and call with correct path.

How to use?
------
The simplest way to show a light box is to call:

new LightItem({
	items:["Hello world!"]
}).show();

You can light html string and DOM object together. If you use jQuery:

new LightItem({
	items:["Hello world!", $("#someId").get(0)]
}).show();

## Bugs and Issues
------
* Refine the constructor
* Consider duplicate object id

## Creator

**Hank Chiu**
kwela064@gmail.com
[http://hankchiu.tw](http://hankchiu.tw])

