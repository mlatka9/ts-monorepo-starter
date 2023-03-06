"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const test_1 = require("@backend/test");
(0, test_1.getName)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3000;
const getUser = () => {
    return {
        id: '1',
        firstName: 'Mateusz',
        age: 23,
    };
};
app.get('/', (req, res) => {
    res.send('Server works ;)');
});
app.get('/user', (req, res) => {
    const user = getUser();
    res.json(user);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map