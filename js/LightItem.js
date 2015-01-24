"use strict";
/*========================
**
**	LightItem.js: a javascript library for light box effects.
**	Author: Hank Chiu @ 2015.1.24
**
*========================*/

var LightItem = function(view){
	this.id = view.id || "light-item-"+Math.random();
	this.baseId = view.baseId || LightItem.defaultBaseId;
	this.title = view.title;

	// main dom
	if(document.getElementById(this.id)){
		this.dom = document.getElementById(this.id);
		this.contentDom = this.dom.querySelector(".light-item-content");
	}else{
		this.dom = document.createElement("div");
		this.dom.setAttribute("id", this.id);
		this.dom.setAttribute("class", "light-item-wrapper");
		this.dom.setAttribute("data-close-anchor",true);
		this.dom.style.display = "none";
		document.body.appendChild(this.dom);

		// content wrapper
		this.contentDom = document.createElement("div");
		this.contentDom.setAttribute("class", "light-item-content");
		this.dom.appendChild(this.contentDom);

		// init contentDom
		this.setItems(view.items);

		// handlers
		var aThis = this;
		this.dom.addEventListener("click", function(e){
			if(e.target.hasAttribute("data-close-anchor")){
				aThis.hide();
			}
		});

	}
};

LightItem.prototype = {
	setItems: function(items){
		this.contentDom.innerHTML = "<p class='top-row'>&nbsp;<span class='close-symbol' data-close-anchor=true>+</span>"+(this.title!==undefined?"<h3>"+this.title+"</h3>":"")+"</p>";

		var aThis = this;
		if(items !== undefined){
			items.forEach(function(item){
				if(typeof item == "string"){
					aThis.contentDom.innerHTML += item;	
				}else if(item.nodeType > 0){
					aThis.contentDom.appendChild(item);
				}
			});
		}
	},
	appendItem: function(item){
		this.contentDom.appendChild(item);
	},
	show: function(){
		this.dom.style.display = "block";
		var aThis = this;
		window.setTimeout(function(){
			aThis.dom.className += " active"; 
		}, 1);
	},
	hide: function(){
		document.getElementById(this.baseId).style.position = "";
		this.dom.className = this.dom.className.replace(" active","");
		var aThis = this;
		window.setTimeout(function(){
			aThis.dom.style.display = "none";
		}, 500);

	}
};

// static members 
LightItem.defaultBaseId = "main-wrapper";	// element to be overlap as background, first child of body
