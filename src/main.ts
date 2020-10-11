import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, '../src/hero/hero.proto'),
        url: 'localhost:50051',
      },
    },
  );
  await app.listen(() => {
    console.log('microservice is listening');
  });
}
bootstrap();
