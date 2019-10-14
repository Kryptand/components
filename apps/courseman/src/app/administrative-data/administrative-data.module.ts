import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslationEntity } from './translation/translation.entity';
import { TranslationService } from './translation/translation.service';
import { TranslationController } from './translation/translation.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([TranslationEntity])],
  providers: [TranslationService],
  controllers: [
    TranslationController
  ],
  exports: [TranslationService]
})
export class AdministrativeDataModule {
}
