import {property} from '../../..';
import {CyclicY} from './cyclic-y.model';

export class CyclicX {
  @property.array(() => CyclicY)
  cyclicProp: CyclicY[];
}
