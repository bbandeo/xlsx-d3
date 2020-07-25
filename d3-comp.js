const { useState, useEffect } = require( 'react')
const ReactDOM = require( 'react-dom')
const { csv } = require( 'd3')
const { VictoryBar, VictoryChart } = require( 'Victory')

const row = d => {
    d.population = +d.population
    return d};

const App = () => {
    const [data, setData] = useState();

    useEffect(() => {
        csv('data.csv', row)
           .then(setData);
           // .then( data => {
                //setData(data);
        // });
    }, []);

    return(
        <VictoryChart
        style={{tickLabels: {fontsize: 120}}}
        width='960'
        height='500'
        domainPadding={50}
        padding={{ top: 10, bottom: 40, left: 80, right:10 }}
        >
            <VictoryBar data={data} x='Cantidad Comprobantes' y='Cantidad' />
        </VictoryChart>
    )
};

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)