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
const product_repository_1 = __importDefault(require("../repository/product.repository"));
class ProductController {
    // private productRepository: ProductRepository;
    // constructor(productRepository: ProductRepository) {
    //   this.productRepository = productRepository;
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req.body;
                const createdProduct = yield product_repository_1.default.create(product);
                res.status(201).json(createdProduct);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating product' });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_repository_1.default.findAll();
                res.status(200).json(products);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Error retrieving products' });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const product = yield product_repository_1.default.findById(id);
                if (product) {
                    res.status(200).json(product);
                }
                else {
                    res.status(404).json({ message: 'Product not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving product' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const product = req.body;
                const updatedRows = yield product_repository_1.default.update(id, product);
                if (updatedRows > 0) {
                    res.status(200).json({ message: 'Product updated successfully' });
                }
                else {
                    res.status(404).json({ message: 'Product not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating product' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedRows = yield product_repository_1.default.delete(id);
                if (deletedRows > 0) {
                    res.status(200).json({ message: 'Product deleted successfully' });
                }
                else {
                    res.status(404).json({ message: 'Product not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting product' });
            }
        });
    }
}
exports.default = ProductController;
