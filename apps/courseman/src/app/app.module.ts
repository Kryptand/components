import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrativeDataModule } from './administrative-data/administrative-data.module';
import { MasterDataModule } from './master-data/master-data.module';
import { UserDataModule } from './user-data/user-data.module';
import { CommonDataModule } from './common-data/common-data.module';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'courseman',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true
    }),
    CommonDataModule,
    AdministrativeDataModule,
    MasterDataModule,
    UserDataModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
