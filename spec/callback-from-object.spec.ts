import {CallbackParameter} from '../dist/callback.js';
import Argument from '@axiona/function/argument/argument.js';
import Callback from '@axiona/function/callback/callback.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('basic', function() {

    const fn = function (number : number) {

        return number + number;
    };

    const argument : Callback<(n:number)=>number> & Argument<[number]> = {callback:fn, argument:[1]};
    const callback = new CallbackParameter(argument);

    it('validate initial data', function () {

        expect(argument.argument).toEqual([1]);
        expect(argument.callback).toEqual(fn);

    });

    it('validate score', function () {

        expect(callback.score).toEqual(2);

    });

    it('change argument', function () {

        argument.argument = [2];
        expect(argument.argument).toEqual([2]);

    });

    it('validate score', function () {

        expect(callback.score).toEqual(4);

    });
});




