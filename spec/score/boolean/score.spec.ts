import ScoreContainer from '../../../dist/score.js';
import Score from '../../../dist/score/boolean/score.js';
import Object_ from '@axiona/object/boolean/object.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('valid', function() {

    const score : ScoreContainer<object> = {score:{}};

    expect(Score(score, Object_)).toBe(true);

});


it('invalid', function() {

    const score : ScoreContainer<string> = {score:'string'};

    expect(Score(score, Object_)).toBe(false);

});
