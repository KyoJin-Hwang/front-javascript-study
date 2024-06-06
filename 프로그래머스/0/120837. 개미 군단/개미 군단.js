function solution(hp) {
    const general = 5
    const soldier = 3 
    const work = 1 
    console.log('test')
    let answer = 0 
    
    answer = Math.floor(hp / general)
    hp = hp % general 
    answer += Math.floor(hp / soldier)
    hp = hp % soldier 
    answer += hp / work 
    
    return answer;
}