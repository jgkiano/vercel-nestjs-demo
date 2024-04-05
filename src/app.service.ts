import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { foo: 'bar' } {
    return { foo: 'bar' };
  }
}
