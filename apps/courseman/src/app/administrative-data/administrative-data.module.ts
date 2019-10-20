import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslationEntity } from './translation/translation.entity';
import { TranslationService } from './translation/translation.service';
import { TranslationController } from './translation/translation.controller';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([TranslationEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [TranslationService],
  controllers: [TranslationController],
  exports: [TranslationService]
})
export class AdministrativeDataModule {}
