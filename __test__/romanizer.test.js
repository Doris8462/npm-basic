import {transform} from "../src/romanizer.js";

describe('romanizer', () => {
    it('should return x when 1 plus 10', () => {
        const formatted = transform(10);

        expect(formatted).toEqual('x');
    });
});