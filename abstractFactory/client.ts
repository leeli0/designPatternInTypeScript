/// <reference path="abstractFactory.ts" />
/// <reference path="concreteFactory.ts" />

/** When you need to add new product variant,
 * you only need to edit the file concreteFactory.ts.
 * 
 * The client code works with factories and products only
 * through abstract types:
 * Factory, ProductA, ProductB. 
 * This lets you pass any factory or
 * product subclass to the client code without breaking it.
 * 
 * compile command: tsc --outFile client.js client.ts
 * */
let factory: AbstractFactory.Factory = AbstractFactory.getConcreteFactory();
let productA: AbstractFactory.ProductA = factory.createProductA();
let productB: AbstractFactory.ProductB = factory.createProductB();
console.log(productA.methodA());
console.log(productB.methodB());

/*
References:
1 https://github.com/torokmark/design_patterns_in_typescript/tree/master/abstract_factory
2 https://refactoring.guru/design-patterns/abstract-factory
*/