"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
});
//# sourceMappingURL=configuration.js.map