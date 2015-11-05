'use strict';

/* Services */

var services = angular.module('ngproduct.services', []);

services.factory('ProductsFactory', function () {
   var products = [
                   {
                	   'id': 1,
                	   'name': 'Fregona',
                	   'price': 20,
                	   'brand': 'Vileda'
                   },
                   {
                	   'id': 2,
                	   'name': 'Palo',
                	   'price': 10,
                	   'brand': 'New'
                   },
                   {
                	   'id': 3,
                	   'name': 'Batamanta',
                	   'price': 30,
                	   'brand': 'Gandalf'
                   }
  ];
   
   return {
	   all: function () {
		   return products;
	   },
	   
	   getById: function (id) {
		   var p = null;
		   angular.forEach(products, function(product){
			   if (product.id == id) {
				   p = product;
			   }
		   });
		   
		   return p;
	   },
	   
	   edit: function (editableProduct) {
		   angular.forEach(products, function(product, key){
			   if (product.id == editableProduct.id) {
				   products[key] = product;
			   }
		   }); 
	   },
	   
	   remove: function (id) {
		   angular.forEach(products, function(product, key){
			   if (product.id == id) {
				  products.splice(key, 1);
			   }
		   }); 
	   },
	   
	   create: function (product) {
		   products.push(product);
	   }
   }
});
