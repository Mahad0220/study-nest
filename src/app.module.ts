import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';

@Module({
  controllers: [ApiController, AppController], //ApiController가 먼저 처리될 수 있도록 순서를 수정합니다.
  providers: [AppService],
  imports: [UsersModule],
})
export class AppModule {}
