import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { SettingsEntity } from './settings.entity';
import { SettingsService } from './settings.service';

@Crud({
  model: {
    type: SettingsEntity,
  },
})
@Controller('settings')
export class SettingsController{
  constructor(private readonly service:SettingsService){
  }
}
