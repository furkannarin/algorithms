// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument(price), payment as the second argument(cash), and cash -in -drawer(cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return { status: "INSUFFICIENT_FUNDS", change: [] } if cash -in -drawer is less than the change due, or if you cannot return the exact change.
// Return { status: "CLOSED", change: [...] } with cash -in -drawer as the value for the key change if it is equal to the change due.
// Otherwise, return { status: "OPEN", change: [...] }, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
    // calculate the number of money available in quantities so that you can loop over it
    let change = cash - price, totalCash = 0, newCid = [], result = [], sum = 0
    for (let i = 0; i < cid.length; i++) {
        totalCash += cid[i][1]
        switch (cid[i][0]) {
            case 'PENNY':
                newCid[8] = { money: cid[i][0], amount: cid[i][1] / 0.01, value: 0.01 }; break;
            case 'NICKEL':
                newCid[7] = { money: cid[i][0], amount: cid[i][1] / 0.05, value: 0.05 }; break;
            case 'DIME':
                newCid[6] = { money: cid[i][0], amount: cid[i][1] / 0.1, value: 0.1 }; break;
            case 'QUARTER':
                newCid[5] = { money: cid[i][0], amount: cid[i][1] / 0.25, value: 0.25 }; break;
            case 'ONE':
                newCid[4] = { money: cid[i][0], amount: cid[i][1] / 1, value: 1 }; break;
            case 'FIVE':
                newCid[3] = { money: cid[i][0], amount: cid[i][1] / 5, value: 5 }; break;
            case 'TEN':
                newCid[2] = { money: cid[i][0], amount: cid[i][1] / 10, value: 10 }; break;
            case 'TWENTY':
                newCid[1] = { money: cid[i][0], amount: cid[i][1] / 20, value: 20 }; break;
            case 'ONE HUNDRED':
                newCid[0] = { money: cid[i][0], amount: cid[i][1] / 100, value: 100 }; break;
        }
    }
    if (totalCash < change) return { status: "INSUFFICIENT_FUNDS", change: [] }
    if (totalCash == change) return { status: "CLOSED", change: cid }

    newCid.map(item => {
        for (let i = 0; i < item.amount; i++) if (sum + item.value <= change) {
            sum += item.value
            // if i + 1 is equal to item.amount, then it means that algorithm already gave all possible money there are in cash in drawer
            // then we multiply it by i + 1 to see the total amount given from that money
            if (i + 1 == item.amount || sum + item.value > change) result.push([item.money, item.value * (i + 1)])
        }
    })

    // condition for checking if the last numbers in the decimals are the same when the last given money is penny. 
    const cond = { change: `${change}`[`${change}`.length - 1], sum: `${sum}`[`${sum.toFixed(2)}`.length - 1] }
    // if condition is 1, then algorithm lacks 0.01 penny, so add it to the value of the penny in the result array
    if (result[result.length - 1][0] == 'PENNY' && cond.change - cond.sum == 1) { result[result.length - 1][1] += 0.01; sum += 0.01 }
    return change > sum ? { status: "INSUFFICIENT_FUNDS", change: [] } : { status: "OPEN", change: result }
}

checkCashRegister(
    3.26, // price of the product
    100, // money handed by customer
    [   // available cash in drawer
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
)