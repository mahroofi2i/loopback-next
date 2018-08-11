import {property} from '../../..';
import {BadCyclicX} from './bad-cyclic-x.model';

export class BadCyclicY {
  @property.array(BadCyclicX)
  cyclicProp: BadCyclicX[];
}
