import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // setTimeout(() => {
    console.log('==> START <==');
    for (let i = 0; i < 5000000000; i += 1) {}
    console.log('==> END <==');
    // }, 0);
    return this.appService.getHello();
  }
}
