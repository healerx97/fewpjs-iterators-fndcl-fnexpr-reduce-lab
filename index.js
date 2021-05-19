const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(a,b) {
    return a+b
} 
const totalBatteries = batteryBatches.reduce(reducer)