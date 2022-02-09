import test from 'ava';
import camera from './index.js';

test('camera brand return type to be string', t => {
    t.is(typeof camera().brand(), 'string');
});

test('camera model return type to be string', t => {
    t.is(typeof camera().model(), 'string');
});

test('camera brand with model type return type to be string', t => {
    t.is(typeof camera().brandWithModel(), 'string');
});
