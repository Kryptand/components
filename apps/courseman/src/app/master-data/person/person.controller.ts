import { AbstractController } from '../../contracts/abstract-controller';
import { PersonEntity } from './person.entity';
import {PersonService} from './person.service';
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
@Crud({
  model: {
    type: PersonEntity,
  },
})
@Controller('person')
export class PersonController {
  constructor(private readonly service:PersonService){
  }
}
