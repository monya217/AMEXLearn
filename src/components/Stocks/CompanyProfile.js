export default function CompanyProfile(
    {
        companyName,
        companyExchange,
        companyIndustry,
        companyIPO,
        companyMarketCap,
        companyBeta,
        companyPERatio,
        companySharesOutstanding,
        company52WeekHighPrice,
        company52WeekHighDate,
        company52WeekLowPrice,
        company52WeekLowDate
    }
){



    return (
        <div>
            <h5 style= {{marginBottom:"1em"}}>{companyName} profile  </h5>
            <div className = "d-flex" style={{marginBottom:"3em"}}>
                <div style={{width:"50%"}}>
                    <table>
                        <tr>
                            <td style={{width:"170px"}}><p>Exchange:</p></td><td style={{textAlign:"right", width:"260px"}}><p>{companyExchange}</p></td>
                        </tr>
                        <tr>
                            <td><p>Industry: </p></td><td style={{textAlign:"right"}}><p>{companyIndustry} </p></td>
                        </tr>
                        <tr>
                            <td><p>IPO: </p></td><td style={{textAlign:"right"}}><p>{companyIPO} </p></td>
                        </tr>
                        <tr>
                            <td><p>Market Capitalization:</p></td><td style={{textAlign:"right"}}><p>{Math.round((companyMarketCap/1000 + Number.EPSILON) * 100) / 100 } Billion </p></td>
                        </tr>
                        <tr>
                            <td><p>Beta: </p></td> <td style={{textAlign:"right"}}><p>{Math.round((companyBeta + Number.EPSILON) * 100) / 100} </p></td>
                        </tr>
                        <tr>
                            <td><p>PE Ratio (TTM): </p></td> <td style={{textAlign:"right"}}><p>{Math.round((companyPERatio + Number.EPSILON) * 100) / 100 } </p></td>
                        </tr>
                    </table>
                </div>
                <div style={{width:"50%", paddingLeft:"2em"}}>
                    <table>
                        <tr>
                            <td style={{width:"170px"}}><p>Shares Outstanding: </p></td> <td style={{textAlign:"right", width:"260px"}}><p>{companySharesOutstanding} Million</p></td>
                        </tr>
                        <tr>
                            <td><p>52 Week High Price: </p></td> <td style={{textAlign:"right"}}><p>{company52WeekHighPrice} dollars</p></td>
                        </tr>
                        <tr>
                            <td><p>52 Week High Date: </p></td> <td style={{textAlign:"right"}}><p>{company52WeekHighDate} </p></td>
                        </tr>
                        <tr>
                            <td><p>52 Week Low Price: </p></td> <td style={{textAlign:"right"}}><p>{company52WeekLowPrice} dollars</p></td>
                        </tr>
                        <tr>
                            <td><p>52 Week Low Date: </p></td> <td style={{textAlign:"right"}}><p>{company52WeekLowDate} </p></td>
                        </tr>
                    </table>

                </div>
                
            </div>
        </div>

    )
}