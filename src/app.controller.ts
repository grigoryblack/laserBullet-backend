import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'tcp_message' })
  handleTcpMessage(data: string): string {
    console.log(`Received TCP message: ${data}`);
    return `TCP response to: ${data}`;
  }
}
