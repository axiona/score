import Score from '../score.js';

export type Replace<ScoreT extends Score, Replace extends any> = {
    [Key in keyof ScoreT]: Key extends 'score' ? Replace : ScoreT[Key];
};

export default Replace;
