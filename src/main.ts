import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import moment from 'moment';
import laoAddress from '@lailao10x/lao-address';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // let options = {
  //   province: 'all',
  // };

  // let provinces = laoAddress(options);

  // console.log(provinces);
  await app.listen(4000);
}
bootstrap();
