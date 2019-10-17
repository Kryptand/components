import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { PersonEntity } from './person.entity';
import { PersonService } from './person.service';

@Crud({
  model: {
    type: PersonEntity
  },
  query:{
    join:{
      address:{
        eager:true
      }
    }
  }
})
@Controller('person')
export class PersonController {
  constructor(private readonly service: PersonService) {}
}
