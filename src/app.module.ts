import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryModule } from './module/inventory/inventory.module';
import { SaleModule } from './module/sale/sale.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    InventoryModule,
    SaleModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'app'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
