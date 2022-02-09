interface Options {
    locale?: string;
}
type Items = Record<string, string>;
declare class Camera {
    _brandItems: Items;
    _modelItems: Items;
    _brandWithModelItems: Items;
    _defaultLocale: string;
    _options?: Options;
    brand(): string;
    model(): string;
    brandWithModel(): string;
    _selectRandom(items: Items): string;
}
export default function camera(options?: Options): Camera;
