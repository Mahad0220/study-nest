import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    console.log(req);
    return this.appService.getHello();
  }

  @Get('/hello')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Get('he*lo')
  getHello3(): string {
    return this.appService.getHello();
  }
}
