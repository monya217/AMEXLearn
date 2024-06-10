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
        <div style={{ width: "50%", color: "black" }}>
            <h5 style={{ marginBottom: "1em", color: "black" }}>Your Input</h5>
            <table>
                <tr>
                    <label>
                        Stock Ticker: <input value={ticker} name="stock_ticker" onChange={e => setTicker(e.target.value)} style={{ color: "black", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} />
                    </label>
                </tr>
                <tr>
                    {needTicker ? <div style={{ height: '1em', color: "white" }} className="warning">Please type a valid stock ticker</div> : <div style={{ height: '1em' }}></div>}
                </tr>
                <tr>
                    <label>
                        Today minus <input value={today_minus_x_days} type="number" min="0" onChange={e => setToday_minus_x_days(e.target.value)} style={{ color: "black", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} /> days
                    </label>
                </tr>
                <tr>
                    {needMinusDays ? <div style={{ height: '1em', color: "white" }} className="warning">Please type a positive number</div> : <div style={{ height: '1em' }}></div>}
                </tr>
                <tr>
                    <label>
                        How many days in the future? <input value={days_in_the_future} type="number" min="0" onChange={e => setDays_in_the_future(e.target.value)} style={{ color: "black", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} />
                    </label>
                </tr>
                <tr>
                    {needForecast ? <div style={{ height: '1em', color: "black" }} className="warning">Please type number zero or higher</div> : <div style={{ height: '1em' }}></div>}
                </tr>
                <tr>
                    <label>
                        Number of simulations <input value={number_of_simulations} type="number" min="0" onChange={e => setNumber_of_simulations(e.target.value)} style={{ color: "black", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} />
                    </label>
                </tr>
                <tr>
                    {needNumberOfSimulations ? <div style={{ height: '1em', color: "black" }} className="warning">Please type number zero or higher</div> : <div style={{ height: '1em' }}></div>}
                </tr>
                
                <button 
                    id="run_button" 
                    onClick={run_function} 
                    className="button"
                    style={{ 
                        color: "white",
                        backgroundColor: "#007bff",
                        border: "1px solid #0056b3",
                        boxShadow: "0 4px 0 #0056b3",
                        borderRadius: "4px",
                        padding: "8px 16px",
                        cursor: "pointer",
                        transition: "background-color 0.3s, box-shadow 0.3s"
                    }}
                >
                    Run
                </button>
            </table>
        </div>
    );
}    