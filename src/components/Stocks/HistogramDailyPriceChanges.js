import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';


export default function HistogramDailyPriceChanges(
    {
        dailyPriceChangeAverage,
        dailyPriceChangeStandardDeviation,
        dailyPriceChangeHistogram,
    }
){



    return (
        <div style={{width:"50%"}}>
            <h5 style= {{marginBottom:"1em"}}>Histogram of daily price changes</h5>
            <p>
                Daily price change average ${Math.round((dailyPriceChangeAverage + Number.EPSILON) * 100) / 100}
            </p>
            <p>
                Daily price change standard deviation ${Math.round((dailyPriceChangeStandardDeviation + Number.EPSILON) * 100) / 100}
            </p>
            <p style= {{marginBottom:"1em"}}>
                This is the normal distribution used to create the simulation.
            </p>
            <BarChart
                width={500}
                height={300}
                data={dailyPriceChangeHistogram}
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
                    <Label value="Daily Price Change (intervals)" offset={-10} position="insideBottom" fill="white"/>
                </XAxis>
                <YAxis style={{fill:"white"}}>
                    <Label value="Frequency" angle="-90" offset={12} position="insideLeft" fill="white" />
                </YAxis>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="frequency" fill="#f38518" />
            </BarChart>
        </div>

    )
}