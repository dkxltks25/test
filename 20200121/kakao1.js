function solution(s) {
    var answer = 0;

    FindSameWord([],s)
    return answer;
}

const splitString = (e)=> e.split(0,Math.floor(e.length/2))

const FindSameWord = (nowArray,FullArray) =>{
    for(let i = 0; i<FullArray.length; i++){
        console.log(FullArray[i]);
    }
}


let string = "abcabcabcabcdededededede";

solution(string);