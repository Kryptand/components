import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingsEntity } from './settings/settings.entity';
import { SettingsService } from './settings/settings.service';
import {SettingsController} from './settings/settings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SettingsEntity])],
  providers: [SettingsService],
  controllers: [
    SettingsController
  ],
  exports: [SettingsService]
})
export class UserDataModule {
}
