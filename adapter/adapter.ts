namespace Adapter {
    export class Target {
        call(): string {
            return 'Target: The default target\'s behavior.';
        }
    }

    export class Adaptee {
        public specificCall(): string {
            return '.eetpadA eht fo roivaheb laicepS';
        }
    }

    export class Adapter extends Target {
        private adaptee: Adaptee;

        constructor(adaptee: Adaptee) {
            super();
            this.adaptee = adaptee;
        }
        call(): string {
            const result = this.adaptee.specificCall().split('').reverse().join('');
            return `Adapter: (TRANSLATE) ${result}`;
        }
    }
}