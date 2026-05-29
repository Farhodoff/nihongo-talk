import { describe, expect, it } from 'vitest';
import exportImportService from '../ExportImportService';

interface TestableExportImportService {
    parseCsv(text: string): string[][];
    escapeCsv(text: string): string;
}

const service = exportImportService as unknown as TestableExportImportService;

describe('ExportImportService', () => {
    describe('CSV Parser (RFC 4180 compliant)', () => {
        it('should parse standard CSV with simple values', () => {
            const csv = '"apple","olma","I like apples"\n"banana","banan","Yellow fruit"';
            const parsed = service.parseCsv(csv);
            
            expect(parsed).toHaveLength(2);
            expect(parsed[0][0]).toBe('apple');
            expect(parsed[0][1]).toBe('olma');
            expect(parsed[0][2]).toBe('I like apples');
            
            expect(parsed[1][0]).toBe('banana');
            expect(parsed[1][1]).toBe('banan');
            expect(parsed[1][2]).toBe('Yellow fruit');
        });

        it('should parse CSV containing commas and quotes inside fields', () => {
            const csv = '"Hello, world","Salom, dunyo","This is a ""cool"" test"\n"simple","oddiy","no quotes"';
            const parsed = service.parseCsv(csv);
            
            expect(parsed).toHaveLength(2);
            expect(parsed[0][0]).toBe('Hello, world');
            expect(parsed[0][1]).toBe('Salom, dunyo');
            expect(parsed[0][2]).toBe('This is a "cool" test');
            
            expect(parsed[1][0]).toBe('simple');
            expect(parsed[1][1]).toBe('oddiy');
            expect(parsed[1][2]).toBe('no quotes');
        });
    });

    describe('escapeCsv helper', () => {
        it('should escape quotes and commas correctly', () => {
            const escape = service.escapeCsv;
            expect(escape('hello')).toBe('hello');
            expect(escape('hello, world')).toBe('"hello, world"');
            expect(escape('hello "world"')).toBe('"hello ""world"""');
        });
    });
});
