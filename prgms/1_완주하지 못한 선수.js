function solution(participant, completion) {
    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();
    let result = '';

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            result = participant[i];
            break;
        }
    }

    return result;
}
