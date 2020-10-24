import askql from 'askql';
import fetch from 'node-fetch';

const { askvm } = askql;
export const customResources = {
    statewise: askvm.resource({
        resolver: async () => {
            return await fetch('https://api.covid19india.org/data.json')
                .then(res => res.json())
                .then(fullData => fullData.statewise.splice(1))
                .then(dataSet => dataSet.map(({state, active, confirmed, deaths, recovered}) =>
                    ({state, active, confirmed, deaths, recovered})))

        },
    }),
};