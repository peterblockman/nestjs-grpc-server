import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
interface HeroById {
  id: number;
}
interface Hero {
  id: number;
  name: string;
}
@Controller()
export class HeroesController {
  // map the method from proto file. this can be omit. Nest automatically associates
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: any): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
