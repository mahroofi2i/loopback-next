import {model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model.ts';

@model()
export class Customer {
  @property({id: true})
  id: number;
  @hasMany(() => Order)
  orders: Order[];
}
