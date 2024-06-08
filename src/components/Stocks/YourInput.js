export default function YourInput(
    {
        ticker,
        setTicker,
        needTicker,
        today_minus_x_days,
        setToday_minus_x_days,
        needMinusDays,
        days_in_the_future,
        setDays_in_the_future,
        needForecast,
        number_of_simulations,
        setNumber_of_simulations,
        needNumberOfSimulations,
        run_function
    }
){



    return (
        <div style={{width:"50%"}}>
            <h5 style= {{marginBottom:"1em"}}>Your Input</h5>
            <table>
                <tr>
                    <label>
                        Stock Ticker: <input value = {ticker} name="stock_ticker" onChange={e => setTicker(e.target.value)}/>
                    </label>
                </tr>
                <tr>
                    {needTicker ? <div style={{height:'1em'}} className="warning">Please type a valid stock ticker</div>:<div style={{height:'1em'}}></div>}
                </tr>
                <tr>
                    <label>
                        Today minus <input value = {today_minus_x_days} type="number" min="0" onChange={e => setToday_minus_x_days(e.target.value)}/> days
                    </label>
                </tr>
                <tr>
                    {needMinusDays ? <div style={{height:'1em'}} className="warning">Please type a positive number</div>:<div style={{height:'1em'}}></div>}
                </tr>
                <tr>
                    <label>
                        How many days in the future? <input value = {days_in_the_future} type="number" min="0" onChange={e => setDays_in_the_future(e.target.value)}/>
                    </label>
                </tr>
                <tr>
                    {needForecast ? <div style={{height:'1em'}} className="warning">Please type number zero or higher</div>:<div style={{height:'1em'}}></div>}
                </tr>
                <tr>
                    <label>
                        Number of simulations <input value = {number_of_simulations} type="number" min="0" onChange={e => setNumber_of_simulations(e.target.value)}/>
                    </label>
                </tr>
                <tr>
                    {needNumberOfSimulations ? <div style={{height:'1em'}} className="warning">Please type number zero or higher</div>:<div style={{height:'1em'}}></div>}
                </tr>
                <button id = "run_button" onClick={run_function} className="button">
                    Run
                </button>

            </table>
        </div> 


    )
}