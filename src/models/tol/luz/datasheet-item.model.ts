import { Entity, model, property } from '@loopback/repository';

@model()
export class DatasheetItemLuz extends Entity {


  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string'
  })
  description: string;

  @property({
    type: 'string'
  })
  value: string;


  constructor(data?: Partial<DatasheetItemLuz>) {
    super(data);
  }
}
