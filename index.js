import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

class Camera {
    _brandItems = {};
    _modelItems = {};
    _brandWithModelItems = {};
    _defaultLocale = 'en_US';
    _options = {};

    constructor(options) {
        this._options = options || {};
        const brandFilePath = `./locales/${this._options.locale || this._defaultLocale}/brand.json`;
        const modelFilePath = `./locales/${this._options.locale || this._defaultLocale}/mode.json`;
        const brandWithModelFilePath = `./locales/${this._options.locale || this._defaultLocale}/brand_with_model.json`;
        this._brandItems = fs.existsSync(path.resolve(brandFilePath)) ? loadJsonFileSync(brandFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/camera/', brandFilePath));
        this._modelItems = fs.existsSync(path.resolve(modelFilePath)) ? loadJsonFileSync(modelFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/camera/', modelFilePath));
        this._brandWithModelItems = fs.existsSync(path.resolve(brandWithModelFilePath)) ? loadJsonFileSync(brandWithModelFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/camera/', brandWithModelFilePath));
    }

    _selectRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    brand() {
        return this._selectRandom(this._brandItems);
    }

    model() {
        return this._selectRandom(this._modelItems);
    }

    brandWithModel() {
        return this._selectRandom(this._brandWithModelItems);
    }
}

export default function Camera(options) {
    return new Camera(options);
}
