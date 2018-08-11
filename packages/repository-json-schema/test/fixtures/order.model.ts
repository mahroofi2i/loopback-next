import {model, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';

@model()
export class Order {
  @belongsTo(Customer)
  customerId: typeof Customer.prototype.id;
}
