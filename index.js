// code your solution here
function superbowlWin(arr){
    const answer = arr.find(({result}) => result === 'W')
    if(answer){
        return answer.year;
    }
    else{
        return undefined
    }
}