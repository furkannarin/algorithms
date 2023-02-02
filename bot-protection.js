// One gaming company found out that they are losing money because some players are using scripts that are playing the
// game for players while they are sleeping.
// 
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them, they
// discovered those scripts are using the same sequence of commands all the time.
// 
// Your task is to use cleaned up access logs to discover bots. Cleaned up access log of one player would look like an
// space separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least
// 2 times from the cleaned up access log.
// 
// For example, we have following access log:
// 
// left right fire jump fire back forward forward jump fire back left left right
// 
// we can see that the sequence "jump fire back" is repeated two times.

function botProtection(playerCommands) {
    const playerActions = []
    playerCommands.map((item, index) => {
        playerActions.push((`${item} ${playerCommands[index + 1]} ${playerCommands[index + 2]}`))
    })

    const result = []
    playerActions.sort().map((item, index) => {
        const nextItem = playerActions[index + 1]
        item == nextItem && item.includes('undefined') == false && result.indexOf(item) == -1 ? result.push(item) : null
    })

    console.log(result.length !== 0 ? `3 sequential commands that are repeated at least 2 times are "${result}"` : 'No Bots Found')
    return result.length !== 0 ? true : false
}

const actions = [
    'go', 'jump', 'jump', 'down', 'back', 'back', 'go', 'jump', 'jump', 'fire', 'back', 'back', 'go', 'jump', 'jump'
];

botProtection(actions);
