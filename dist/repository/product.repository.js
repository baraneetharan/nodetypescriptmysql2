"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = __importDefault(require("../dbconfig"));
class ProductRepository {
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield dbconfig_1.default.query('INSERT INTO products (name, description, instockQuantity, price) VALUES (?, ?, ?, ?)', [product.name, product.description, product.instockQuantity, product.price]);
            return Object.assign({ id: result.insertId }, product);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield dbconfig_1.default.query('SELECT * FROM products');
            console.log(rows);
            return rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield dbconfig_1.default.query('SELECT * FROM products WHERE id = ?', [id]);
            if (rows.length > 0) {
                return rows[0];
            }
            else {
                return undefined;
            }
        });
    }
    update(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield dbconfig_1.default.query('UPDATE products SET name = ?, description = ?, instockQuantity = ?, price = ? WHERE id = ?', [product.name, product.description, product.instockQuantity, product.price, id]);
            return result.affectedRows;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield dbconfig_1.default.query('DELETE FROM products WHERE id = ?', [id]);
            return result.affectedRows;
        });
    }
}
exports.default = new ProductRepository();
