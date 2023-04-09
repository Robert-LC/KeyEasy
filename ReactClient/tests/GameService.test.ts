import { test, expect } from '@playwright/test';
import GameService  from '../src/services/GameService';

test.describe('GameService', () => {
    test.describe('StartGame', () => {
        const gameSvc = new GameService();
        test('StartGame sets up KeyListeners', async ({}) => {
            // expect(true).toBe(true);
        });
    });
});