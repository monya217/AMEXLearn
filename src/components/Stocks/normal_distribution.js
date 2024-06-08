// //https://jsfiddle.net/3rf4jL8n/2/
function BoxMullerTransform() {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0;
}

export function GetNormallyDistributedRandomNumber(mean, stddev) {
    const z0 = BoxMullerTransform();
    
    return z0 * stddev + mean;
}