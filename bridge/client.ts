/// <reference path="bridge.ts" />

function clientCode(abstraction: Bridge.Abstraction) {
    console.log(abstraction.operation());
}

let implementation = new Bridge.ConcreteImplementationA();
let abstraction = new Bridge.Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new Bridge.ConcreteImplementationB();
abstraction = new Bridge.ExtendedAbstraction(implementation);
clientCode(abstraction);