//last_predicted_prices is an array

export function getPredictedPriceHistogram(last_predicted_prices){

    // get average
    let sum = 0

    for(let i = 0; i<last_predicted_prices.length ; i++){

        sum += last_predicted_prices[i]

    }

    let last_price_average = sum/last_predicted_prices.length


    // get standard deviation
    let sqred_sum = 0

    for(let i = 0; i<last_predicted_prices.length ; i++){

        sqred_sum += (last_predicted_prices[i]-last_price_average)**2

    }

    let last_price_standard_deviation = Math.sqrt(sqred_sum/(last_predicted_prices.length-1))

    //create histogram of last prices

    let histogram_min = last_price_average - last_price_standard_deviation * 3

    //to create the histogram you have to sort the numbers from smallest to largest
    //.sort() works fine when all the numbers are positive
    //but you need .sort(function(a,b){return a - b}) if you have negative numbers

    last_predicted_prices.sort(function(a,b){return a - b})

    let graph_histogram = []

    //the histogram will have 18 buckets
    //3 standard deviations on each side of the mean
    //each standard deviation subdivided in 3
    // 3 * 2 * 3 = 18

    for (let i = 1; i<=18;i++){
        let bucket_full = false

        let frequency = 0

        while(bucket_full == false){
            if (last_predicted_prices[0]<histogram_min+last_price_standard_deviation/3){
                frequency++
                last_predicted_prices.shift()
            } else {
                bucket_full = true
            }
        }

        graph_histogram.push({
            name:Math.round(histogram_min),
            frequency:frequency
        })

        histogram_min+=last_price_standard_deviation/3

    }

    //return object with all the data requested

    return {
        last_price_average:last_price_average,
        last_price_standard_deviation:last_price_standard_deviation,
        last_price_graph_histogram:graph_histogram
    }
}