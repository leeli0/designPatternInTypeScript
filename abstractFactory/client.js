var AbstractFactory;
(function (AbstractFactory) {
    var ProductA1 = /** @class */ (function () {
        function ProductA1() {
            this.methodA = function () {
                return "This is methodA of ProductA1";
            };
        }
        return ProductA1;
    }());
    var ProductB1 = /** @class */ (function () {
        function ProductB1() {
            this.methodB = function () {
                return "This is methodB of ProductB1";
            };
        }
        return ProductB1;
    }());
    var ProductA2 = /** @class */ (function () {
        function ProductA2() {
            this.methodA = function () {
                return "This is methodA of ProductA2";
            };
        }
        return ProductA2;
    }());
    var ProductB2 = /** @class */ (function () {
        function ProductB2() {
            this.methodB = function () {
                return "This is methodA of ProductB2";
            };
        }
        return ProductB2;
    }());
    var ConcreteFactory1 = /** @class */ (function () {
        function ConcreteFactory1() {
        }
        ConcreteFactory1.prototype.createProductA = function (param) {
            return new ProductA1();
        };
        ConcreteFactory1.prototype.createProductB = function (param) {
            return new ProductB1();
        };
        return ConcreteFactory1;
    }());
    var ConcreteFactory2 = /** @class */ (function () {
        function ConcreteFactory2() {
        }
        ConcreteFactory2.prototype.createProductA = function (param) {
            return new ProductA2();
        };
        ConcreteFactory2.prototype.createProductB = function (param) {
            return new ProductB2();
        };
        return ConcreteFactory2;
    }());
    /**
     * Write your create logic here.
     */
    function getConcreteFactory() {
        if (Math.random() >= 0.5) {
            return new ConcreteFactory1;
        }
        else {
            return new ConcreteFactory2;
        }
    }
    AbstractFactory.getConcreteFactory = getConcreteFactory;
})(AbstractFactory || (AbstractFactory = {}));
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
var factory = AbstractFactory.getConcreteFactory();
var productA = factory.createProductA();
var productB = factory.createProductB();
console.log(productA.methodA());
console.log(productB.methodB());
/*
References:
1 https://github.com/torokmark/design_patterns_in_typescript/tree/master/abstract_factory
2 https://refactoring.guru/design-patterns/abstract-factory
*/ 
