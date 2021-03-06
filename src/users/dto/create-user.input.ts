import { InputType, Field, Int } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

import { Ticket } from '../../tickets/entities/ticket.entity';

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  firstName: string;

  @Field()
  @MaxLength(30)
  lastName: string;

  @Field(type => [Int], { nullable: true })
  tickets: Ticket[];
}
