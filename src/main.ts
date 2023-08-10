import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './cluster.service';
const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.listen(PORT);
}

ClusterService.clusterize(bootstrap);
