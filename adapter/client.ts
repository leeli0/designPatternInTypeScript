/// <reference path="adapter.ts" />
function clientCode(target: Adapter.Target) {
    console.log(target.call());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Adapter.Target();
clientCode(target);

console.log('');

const adaptee = new Adapter.Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificCall()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter.Adapter(adaptee);
clientCode(adapter);