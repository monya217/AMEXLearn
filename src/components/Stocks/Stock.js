import React, { useEffect, useState } from 'react';
import styles from './Stock.module.css';

import { GetNormallyDistributedRandomNumber } from './normal_distribution';
import { getDailyPriceChangeAverageAndSD } from './get_daily_price_change_histogram';
import { getPredictedPriceHistogram } from './get_predicted_price_histogram';

import CompanyProfile from './CompanyProfile';
import HistogramPredictedPrices from './HistogramPredictedPrices';
import HistogramDailyPriceChanges from './HistogramDailyPriceChanges';
import HistoricalPriceAndPrediction from './HistoricalPriceAndPrediction';
import YourInput from './YourInput';

import { restClient } from '@polygon.io/client-js';

const rest = restClient("MWQAjpvNTxxKVKDRy9oEjwgjTbxuOom_", "https://api.polygon.io");
const finnhub = require('finnhub');

function Stock() {
    const [graphPriceAndPrediction, setGraphPriceAndPrediction] = useState([]);
    const [ticker, setTicker] = useState('AAPL');
    const [lastPrice, setLastPrice] = useState(0);

    const [companyName, setCompanyName] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [companyExchange, setCompanyExchange] = useState('');
    const [companyIndustry, setCompanyIndustry] = useState('');
    const [companyIPO, setCompanyIPO] = useState('');
    const [companyMarketCap, setCompanyMarketCap] = useState('');
    const [companySharesOutstanding, setCompanySharesOutstanding] = useState('');
    const [company52WeekHighPrice, setCompany52WeekHighPrice] = useState('');
    const [company52WeekHighDate, setCompany52WeekHighDate] = useState('');
    const [company52WeekLowPrice, setCompany52WeekLowPrice] = useState('');
    const [company52WeekLowDate, setCompany52WeekLowDate] = useState('');
    const [companyBeta, setCompanyBeta] = useState('');
    const [companyPERatio, setCompanyPERatio] = useState('');
    const [companyNews, setCompanyNews] = useState([]);

    const [needTicker, setNeedTicker] = useState(false);
    const [today_minus_x_days, setToday_minus_x_days] = useState(365);
    const [needMinusDays, setNeedMinusDays] = useState(false);
    const [days_in_the_future, setDays_in_the_future] = useState(100);
    const [needForecast, setNeedForecast] = useState(false);
    const [number_of_simulations, setNumber_of_simulations] = useState(100);
    const [needNumberOfSimulations, setNeedNumberOfSimulations] = useState(false);
    const [futureDay, setFutureDay] = useState("");
    const [run, setRun] = useState(true);
    const [predictedDatakeys, setPredictedDatakeys] = useState([]);

    const [predictedPriceHistogram, setPredictedPriceHistogram] = useState([]);
    const [predictedPriceAverage, setPredictedPriceAverage] = useState(0);
    const [predictedPriceStandardDeviation, setPredictedPriceStandardDeviation] = useState(0);

    const [dailyPriceChangeHistogram, setDailyPriceChangeHistogram] = useState([]);
    const [dailyPriceChangeAverage, setDailyPriceChangeAverage] = useState(0);
    const [dailyPriceChangeStandardDeviation, setDailyPriceChangeStandardDeviation] = useState(0);

    function run_function() {
        setRun(!run);
    }

    useEffect(() => {
        setGraphPriceAndPrediction([]);
        setPredictedPriceHistogram([]);
        setPredictedPriceAverage(0);
        setPredictedPriceStandardDeviation(0);

        setDailyPriceChangeHistogram([]);
        setDailyPriceChangeAverage(0);
        setDailyPriceChangeStandardDeviation(0);

        let formatted_received_data = [];

        setNeedNumberOfSimulations(false);
        setNeedForecast(false);
        setNeedMinusDays(false);
        setNeedTicker(false);

        if (today_minus_x_days <= 0 || today_minus_x_days === '') {
            setNeedMinusDays(true);
        }
        if (days_in_the_future < 0 || days_in_the_future === '') {
            setNeedForecast(true);
        }
        if (number_of_simulations < 0 || number_of_simulations === '') {
            setNeedNumberOfSimulations(true);
        }

        if (ticker === "") {
            setNeedTicker(true);
        } else if (today_minus_x_days <= 0 || today_minus_x_days === '') {
            setNeedMinusDays(true);
        } else if (days_in_the_future < 0 || days_in_the_future === '') {
            setNeedForecast(true);
        } else if (number_of_simulations < 0 || number_of_simulations === '') {
            setNeedNumberOfSimulations(true);
        } else {
            getdata(monteCarlo);
        }

        function getdata(callback) {
            let start_date = new Date();
            start_date.setDate(start_date.getDate() - today_minus_x_days);
            let start_date_str = start_date.toISOString().split('T')[0];
            
            rest.stocks.aggregates(ticker, 1, "day", start_date_str, new Date().toISOString().split('T')[0])
                .then((data_received) => {
                    if (data_received && data_received.results) {
                        for (let x in data_received.results) {
                            let time = data_received.results[x].t;
                            let price = data_received.results[x].c;
                            formatted_received_data.push({ time: time, price: price });
                        }
                        setLastPrice(formatted_received_data[formatted_received_data.length - 1].price);
                        callback();
                    } else {
                        setNeedTicker(true);
                    }
                }).catch(e => {
                    console.error('An error happened:', e);
                    setNeedTicker(true);
                });
                const api_key2 = finnhub.ApiClient.instance.authentications['api_key'];
            api_key2.apiKey = "ckb23k9r01ql5f1naln0ckb23k9r01ql5f1nalng"
            const finnhubClient = new finnhub.DefaultApi()

            
            finnhubClient.companyProfile2({'symbol': ticker}, (error, data, response) => {

                setCompanyName(data.name)
                setCompanyLogo(data.logo)
                setCompanyExchange(data.exchange)

                let IPO_day = new Date(data.ipo)
                let IPO_day_string = IPO_day.toUTCString().slice(5,16)
                setCompanyIPO(IPO_day_string)

                setCompanyIndustry(data.finnhubIndustry)
                setCompanyMarketCap(data.marketCapitalization)
                setCompanySharesOutstanding(data.shareOutstanding)
            });

            finnhubClient.companyBasicFinancials(ticker, "all", (error, data, response) => {
                setCompanyBeta(data.metric.beta)
                let AnnualHigh = '52WeekHigh'
                setCompany52WeekHighPrice(data.metric[AnnualHigh])
                let AnnualHighDate = '52WeekHighDate'
                setCompany52WeekHighDate(data.metric[AnnualHighDate])
                let AnnualLow = '52WeekLow'
                setCompany52WeekLowPrice(data.metric[AnnualLow])
                let AnnualLowDate = '52WeekLowDate'
                setCompany52WeekLowDate(data.metric[AnnualLowDate])
                setCompanyPERatio(data.metric.peTTM)

            });
        }

        function monteCarlo() {
            let daily_price_change_average_and_SD = getDailyPriceChangeAverageAndSD(formatted_received_data);

            let daily_price_change_average_non_state = daily_price_change_average_and_SD.average;
            let daily_price_change_standard_deviation_non_state = daily_price_change_average_and_SD.standard_deviation;

            setDailyPriceChangeAverage(daily_price_change_average_non_state);
            setDailyPriceChangeStandardDeviation(daily_price_change_standard_deviation_non_state);
            setDailyPriceChangeHistogram(daily_price_change_average_and_SD.graph_histogram);

            let predicted_prices = [{
                time: formatted_received_data[formatted_received_data.length - 1].time
            }];

            for (let i = 0; i < days_in_the_future; i += 1) {
                predicted_prices.push({
                    time: predicted_prices[predicted_prices.length - 1].time + (24 * 60 * 60 * 1000)
                });
            }

            let predictedDatakeys_non_state = [];

            for (let number = 0; number < number_of_simulations; number++) {
                let key = 'predicted_price_' + number;
                predictedDatakeys_non_state.push(key);
                predicted_prices[0][key] = formatted_received_data[formatted_received_data.length - 1].price;

                for (let i = 1; i < predicted_prices.length; i += 1) {
                    predicted_prices[i][key] = predicted_prices[i - 1][key] + GetNormallyDistributedRandomNumber(daily_price_change_average_non_state, daily_price_change_standard_deviation_non_state);
                }
            }

            setPredictedDatakeys(predictedDatakeys_non_state);

            let last_predicted_prices = Object.values(predicted_prices[predicted_prices.length - 1]);
            last_predicted_prices.shift();

            let last_price_average_SD_histogram = getPredictedPriceHistogram(last_predicted_prices);

            setPredictedPriceAverage(last_price_average_SD_histogram.last_price_average);
            setPredictedPriceStandardDeviation(last_price_average_SD_histogram.last_price_standard_deviation);
            setPredictedPriceHistogram(last_price_average_SD_histogram.last_price_graph_histogram);

            let final_day = new Date(predicted_prices[predicted_prices.length - 1].time);
            let final_day_string = final_day.toUTCString().slice(5, 16);
            setFutureDay(final_day_string);

            let final_array = formatted_received_data.concat(predicted_prices);
            setGraphPriceAndPrediction(final_array);
        }

        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                run_function();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, [run]);

    return (
        <div className={`d-flex justify-content-center ${styles.padding}`}>
            <div className={styles.width}>
                <div className="text-center mb-3">
                    <h1 className="text-primary">Monte Carlo Simulation for {companyName}</h1>
                    {companyLogo && <img src={companyLogo} alt="logo" className={`${styles.logo} ms-3`} />}
                </div>
                <div className="text-center mb-3">
                    <p className="text-primary fs-5">Stock price from Polygon.io</p>
                </div>
                <div className="mb-5">
                    <YourInput
                        ticker={ticker}
                        setTicker={setTicker}
                        needTicker={needTicker}
                        today_minus_x_days={today_minus_x_days}
                        setToday_minus_x_days={setToday_minus_x_days}
                        needMinusDays={needMinusDays}
                        days_in_the_future={days_in_the_future}
                        setDays_in_the_future={setDays_in_the_future}
                        needForecast={needForecast}
                        number_of_simulations={number_of_simulations}
                        setNumber_of_simulations={setNumber_of_simulations}
                        needNumberOfSimulations={needNumberOfSimulations}
                        run_function={run_function}
                    />
                </div>
                <div className="mb-5">
                    <HistoricalPriceAndPrediction
                        lastPrice={lastPrice}
                        graphPriceAndPrediction={graphPriceAndPrediction}
                        predictedDatakeys={predictedDatakeys}
                    />
                </div>
                <div className="mb-5 d-flex justify-content-between">
                    <HistogramDailyPriceChanges
                        dailyPriceChangeAverage={dailyPriceChangeAverage}
                        dailyPriceChangeStandardDeviation={dailyPriceChangeStandardDeviation}
                        dailyPriceChangeHistogram={dailyPriceChangeHistogram}
                    />
                    <HistogramPredictedPrices
                        futureDay={futureDay}
                        predictedPriceAverage={predictedPriceAverage}
                        predictedPriceStandardDeviation={predictedPriceStandardDeviation}
                        predictedPriceHistogram={predictedPriceHistogram}
                    />
                </div>
                <div>
                    <CompanyProfile
                        companyName={companyName}
                        companyExchange={companyExchange}
                        companyIndustry={companyIndustry}
                        companyIPO={companyIPO}
                        companyMarketCap={companyMarketCap}
                        companyBeta={companyBeta}
                        companyPERatio={companyPERatio}
                        companySharesOutstanding={companySharesOutstanding}
                        company52WeekHighPrice={company52WeekHighPrice}
                        company52WeekHighDate={company52WeekHighDate}
                        company52WeekLowPrice={company52WeekLowPrice}
                        company52WeekLowDate={company52WeekLowDate}
                    />
                </div>
            </div>
        </div>
    );
}

export default Stock;
