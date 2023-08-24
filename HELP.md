npm init -y

Create folders

Create tsconfig.json
npx tsc --init

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  }
}
```

package.json

```
npm i dotenv express mysql2
npm i @types/body-parser  @types/dotenv @types/express @types/mysql @types/node ts-node typescript -D
```

```
"build": "tsc",
"dev": "node ./dist/app.js",
"start": "tsc && npm run dev"

```

```
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  instockQuantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (name, description, instockQuantity, price) VALUES ('Product 1', 'Description for Product 1', 10, 49.99);
INSERT INTO products (name, description, instockQuantity, price) VALUES ('Product 2', 'Description for Product 2', 20, 99.50);
INSERT INTO products (name, description, instockQuantity, price) VALUES ('Product 3', 'Description for Product 3', 5, 19.95);
INSERT INTO products (name, description, instockQuantity, price) VALUES ('Product 4', 'Description for Product 4', 15, 249.75);
INSERT INTO products (name, description, instockQuantity, price) VALUES ('Product 5', 'Description for Product 5', 8, 89.00);

```


```
{"id":6,"name":"Product 6","description":"Description for Product 6","instockQuantity":60,"price":"69.99"}
```