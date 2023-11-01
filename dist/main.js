"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const configuration_1 = require("./config/configuration");
function configureSwagger(app) {
    const swaggerDocOptions = new swagger_1.DocumentBuilder()
        .setTitle('Menu-service')
        .setDescription('The Menu-service API description')
        .setVersion('1.0.0')
        .addBearerAuth({
        type: 'apiKey',
        scheme: 'JWT',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Type into the text box: Bearer {your JWT token}',
        in: 'header',
    }, 'JWT')
        .build();
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, swaggerDocOptions);
    swagger_1.SwaggerModule.setup('menuIOT/docs', app, swaggerDoc);
}
function configureValidation(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: false,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'menuIOT/api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors();
    configureSwagger(app);
    configureValidation(app);
    app.enableCors();
    await app.listen((0, configuration_1.default)().port, () => {
        console.log(`app is running on port: ${(0, configuration_1.default)().port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map