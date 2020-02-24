export function calculateRoundPoints(score, predict, double){
    return (score === predict ? 5 : eval(score) === eval(predict) ? 3 : eval(score) * eval(predict) > 0 ? 2 : 0) * (+double+1) 
}