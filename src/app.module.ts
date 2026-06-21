import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
    }),
  ],
  controllers: [AppController], // URL을 가져오고 함수를 실행하는 역할(ex, nodejs의 express)
  providers: [AppService], // 비즈니스 로직을 담당(ex, 데이터베이스 처리, 로직 처리)
})
export class AppModule {}
