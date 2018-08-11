import {property} from '../../..';
import {BadCyclicY} from './bad-cyclic-y.model';

export class BadCyclicX {
  @property.array(BadCyclicY)
  cyclicProp: BadCyclicY[];
}
