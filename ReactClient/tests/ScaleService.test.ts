import { test, expect} from '@playwright/test';
import ScaleService  from '../src/services/ScaleService';
import ScaleType from '../src/enums/ScaleType';


test.describe('ScaleService', () => {
    // tests for when the full suite of scales is available
    // test.describe('GenerateScales', () => {
    //     const scaleSvc = new ScaleService();
    //     const majorScales = scaleSvc.GenerateScales(ScaleType.Major);
    //     const minorScales = scaleSvc.GenerateScales(ScaleType.Minor);

    //     test('Generated Major list has 12 scales', async ({}) => {
    //         expect(majorScales.length).toBe(12);
    //     });

    //     test('Generated Minor list has 12 scales', async ({}) => {
    //         expect(minorScales.length).toBe(12);
    //     });

    //     test('Generated Scale has 7 notes', async ({}) => {
    //         expect(majorScales[0].Notes.length).toBe(7);
    //     });

    //     test('Generated Scales are Major', async ({}) => {
    //         expect(majorScales[0].Name).toContain('major');
    //         expect(majorScales[0].Name).not.toContain('minor');
    //     });

    //     test('Generated Scales are Minor', async ({}) => {
    //         expect(minorScales[0].Name).toContain('minor');
    //         expect(minorScales[0].Name).not.toContain('major');      
    //     });
    // });

    // test.describe('SelectRandomScale', () => {
    //     test('SelectRandomScale returns a scale', async ({}) => {
    //         const scaleSvc = new ScaleService();
    //         expect(scaleSvc.SelectRandomScale()).not.toBe(undefined);
    //     });

    //     test('SelectRandomScale removes the scale from the list of scales', async ({}) => {
    //         const scaleSvc = new ScaleService();
    //         const scale = scaleSvc.SelectRandomScale();
    //         expect(scale).not.toBe(undefined);
    //         expect(scaleSvc.GetScalesLeft()).toBe(11);
    //     });

    //     test('SelectRandomScale returns undefined when there are no scales left to pick from', async ({}) => {
    //         const SCALE_COUNT = 12;
    //         const scaleSvc = new ScaleService();
    //         for (let i = 0; i < SCALE_COUNT; i++) {
    //             scaleSvc.SelectRandomScale();
    //         }
    //         expect(scaleSvc.GetScalesLeft()).toBe(0);
    //         expect(scaleSvc.SelectRandomScale()).toBe(undefined);
    //     });
    // });
});

