import {property} from '../../..';
import {CyclicX} from './cyclic-x.model';

export class CyclicY {
  @property.array(() => CyclicX)
  cyclicProp: CyclicX[];
}
