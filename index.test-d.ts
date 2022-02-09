import {expectType} from 'tsd';
import camera from './index.js';

expectType<string>(camera({locale: 'en_US'}).brand());
expectType<string>(camera().model());
expectType<string>(camera().brandWithModel());
