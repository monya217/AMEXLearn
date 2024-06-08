import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import moment from 'moment'

export default function HistoricalPriceAndPrediction(
    {
        lastPrice,
        graphPriceAndPrediction,
        predictedDatakeys
    }
){



    return (
        <div style={{width:"50%", paddingLeft:"2em"}}>
            <h5 style= {{marginBottom:"1em"}}>Historical Price and Prediction</h5>
            <p style= {{marginBottom:"1em"}}>
                Last reported price ${lastPrice}
            </p>
            <LineChart
                width={500}
                height={300}
                data={graphPriceAndPrediction}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 15
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="time" 
                    tickFormatter = {unixTime => moment(unixTime).format("MMM-YY")}
                    style={{fill:"white"}}
                >
                    <Label value="Time" offset={-10} position="insideBottom" fill="white"/>
                </XAxis>
                <YAxis domain={['auto', 'auto']} style={{fill:"white"}} >
                    <Label value="Stock Price $" angle="-90" offset={12} position="insideLeft" fill="white" />
                </YAxis>
                <Tooltip />
                <Line
                    type="line"
                    dataKey="price"
                    stroke="#f38518"
                    dot={false}
                    strokeWidth="1.5"
                />
                {predictedDatakeys.map((element)=>{
                    return <Line type="line" dataKey={element} stroke="#ff66fe" dot={false}/>
                })}

            </LineChart>
        </div>  


    )
}