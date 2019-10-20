import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterDataModule } from '../master-data/master-data.module';
import { SettingsController } from './settings/settings.controller';
import { SettingsEntity } from './settings/settings.entity';
import { SettingsService } from './settings/settings.service';
import { FavouriteEntity } from './favourites/favourite.entity';
import { FavouriteService } from './favourites/favourite.service';
import { FavouriteController } from './favourites/favourite.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { key } from './auth/constants';
import { UserEntity } from './user/user.entity';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([SettingsEntity, FavouriteEntity, UserEntity]),
    MasterDataModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: key,
      signOptions: { expiresIn: '12000s' }
    })
  ],
  providers: [
    SettingsService,
    FavouriteService,
    UserService,
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  controllers: [
    SettingsController,
    FavouriteController,
    UserController,
    AuthController
  ],
  exports: [SettingsService, AuthService]
})
export class UserDataModule {}
