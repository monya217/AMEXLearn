export function getDailyPriceChangeAverageAndSD(formatted_received_data){

    //compute the average daily price change, the oldest observation will be lost

    let delta_sum = 0;
    let count = 0;
    let daily_price_change = [];
    for (let i =1;i<formatted_received_data.length;i++){
        let delta = formatted_received_data[i].price-formatted_received_data[i-1].price
        daily_price_change.push(delta)
        delta_sum = delta_sum + delta
        count ++               
    }

    let average = delta_sum/count

    

    //compute the standard deviation of the daily price changes

    let sum_deviation_from_average_squared = 0;
    for (let i =0;i<daily_price_change.length;i++){
        let delta = (daily_price_change[i]-average)**2
        sum_deviation_from_average_squared += delta             
    }

    let standard_deviation = Math.sqrt(sum_deviation_from_average_squared/(count-1))

    //create histogram of last prices

    let histogram_min = average - standard_deviation * 3

    //to create the histogram you have to sort the numbers from smallest to largest
    //.sort() works fine when all the numbers are positive
    //but you need .sort(function(a,b){return a - b}) if you have negative numbers

    daily_price_change.sort(function(a,b){return a - b})


    let graph_histogram = []

    //the histogram will have 18 buckets
    //3 standard deviations on each side of the mean
    //each standard deviation subdivided in 3
    // 3 * 2 * 3 = 18

    for (let i = 1; i<=18;i++){
        let bucket_full = false

        let frequency = 0

        while(bucket_full == false){
            if (daily_price_change[0]<histogram_min+standard_deviation/3){
                frequency++
                daily_price_change.shift()
            } else {
                bucket_full = true
            }
        }

        graph_histogram.push({
            name:Math.round((histogram_min + Number.EPSILON) * 100) / 100 ,
            frequency:frequency
        })

        histogram_min+=standard_deviation/3

    }


    return {
        average:average, 
        standard_deviation:standard_deviation,
        graph_histogram:graph_histogram
    }
}