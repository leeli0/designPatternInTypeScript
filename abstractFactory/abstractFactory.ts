namespace AbstractFactory {
    export interface ProductA {
        methodA(): string;
    }

    export interface ProductB {
        methodB(): string;
    }

    export interface Factory {
        createProductA(param?: any): ProductA;
        createProductB(param?: any): ProductB;
    }
}