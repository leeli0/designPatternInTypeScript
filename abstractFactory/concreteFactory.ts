namespace AbstractFactory {
    class ProductA1 implements ProductA {
        methodA = () => {
            return "This is methodA of ProductA1";
        }
    }

    class ProductB1 implements ProductB {
        methodB = () => {
            return "This is methodB of ProductB1";
        }
    }

    class ProductA2 implements ProductA {
        methodA = () => {
            return "This is methodA of ProductA2";
        }
    }

    class ProductB2 implements ProductB {
        methodB = () => {
            return "This is methodA of ProductB2";
        }
    }


    class ConcreteFactory1 implements Factory {
        createProductA(param?: any): ProductA {
            return new ProductA1();
        }

        createProductB(param?: any): ProductB {
            return new ProductB1();
        }
    }

    class ConcreteFactory2 implements Factory {
        createProductA(param?: any): ProductA {
            return new ProductA2();
        }

        createProductB(param?: any): ProductB {
            return new ProductB2();
        }
    }

    /**
     * Write your create logic here.
     */
    export function getConcreteFactory(): Factory {
        if (Math.random() >= 0.5) {
            return new ConcreteFactory1;
        } else {
            return new ConcreteFactory2;
        }
        
    }
}