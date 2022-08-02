import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get()
  listMessages() {}

  @Get()
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
