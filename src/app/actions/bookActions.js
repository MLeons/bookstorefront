export function setChartData(listParams) {
    return {
        type: "SET_LIST",
        payload: listParams
    }
}

export function setList(listParams) {
    return dispatch => {
        return getChartData(listParams).then(chartData => {
            dispatch(setChartData({
                ticker: listParams.ticker,
                threshold: listParams.threshold,
                chartData: chartData
            }));
        }).catch(error => {
            throw (error);
        });
    }
}

export function getChartData(listParams) {

    var d = new Date();
    var endDate = Math.round(d.getTime() / 1000);
    let startDate = endDate - (60 * 60 * 24);
    let ticker = listParams.ticker;
    let urlChartdata = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_${ticker}&start=${startDate}&end=${endDate}&period=300`;

    return fetch(urlChartdata).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}