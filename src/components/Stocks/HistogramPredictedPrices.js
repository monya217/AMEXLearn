import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';


export default function HistogramPredictedPrices(
    {
        futureDay,
        predictedPriceAverage,
        predictedPriceStandardDeviation,
        predictedPriceHistogram
    }
){



    return (
        <div style={{width:"50%" , paddingLeft:"2em"}}>
            <h5 style= {{marginBottom:"1em"}}>Histogram of predicted prices for {futureDay}</h5>
            
            <p>
                Average price ${Math.round((predictedPriceAverage + Number.EPSILON) * 100) / 100} 
            </p>
            <p>
                Standard deviation of the prices ${Math.round((predictedPriceStandardDeviation + Number.EPSILON) * 100) / 100} 
            </p>
            <p style= {{marginBottom:"1em"}}>
                Assuming that the daily price change is a random event.
            </p>

            <BarChart
                width={500}
                height={300}
                data={predictedPriceHistogram}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 15
                }}
                barSize={20}
            >
                <XAxis 
                    dataKey="name" 
                    scale="band" 
                    padding={{ left: 10, right: 10 }} 
                    style={{fill:"white"}}
                >
                    <Label value="Predicted Price (intervals)" offset={-10} position="insideBottom" fill="white"/>
                </XAxis>
                <YAxis style={{fill:"white"}}>
                    <Label value="Frequency" angle="-90" offset={12} position="insideLeft" fill="white" />
                </YAxis>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="frequency" fill="#ff66fe" />
            </BarChart>
        </div>

    )
}