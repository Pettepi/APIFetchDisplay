import React from "react";
import ReactDOM from "react-dom";

// set header and method for API call
let object = {
    method: "GET",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoicGV0dGVyaS5waWlyb25lbkBnbWFpbC5jb20iLCJpYXQiOjE1NDk2MzEzNDh9.dH6cUoifYWEJNhbRX0At29XYlQ6h8brBFoitYCaRPgY"
    }
};

// create class
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    // declare state and store response in an array
    state = {
        dataSet: [],
        loading: false
    };

    interval;
    // set a timer to fetch data periodically since it updates every hour
    componentDidMount() {
        this.fetchPosts();
        this.interval = setInterval(this.fetchPosts, 10000);
    }
    // if fetched, clear the the interval
    componentWillUnmount() {
        if (this.interval) clearInterval(this.interval);
    }
    // simple data fetch
    fetchPosts = () => {
        this.setState({ dataSet: [], loading: true });
        fetch("https://opendata.hopefully.works/api/events", object)
            .then(response => response.json())
            .then(json => this.setState({ dataSet: json, loading: false }));
    };
    // display the response data
    render() {
        const { loading, dataSet } = this.state;
        if (loading) return <p>Loading...</p>; // tells user whats if data is loading
        return (
            <ul>
                <p>
                    Date: {dataSet.date}
                    <br />
                    Sensor1:  {dataSet.sensor1}
                    <br />
                    Sensor2:  {dataSet.sensor2}
                    <br />
                    Sensor3:   {dataSet.sensor3}
                    <br />
                    Sensor4:  {dataSet.sensor4}
                </p>
            </ul>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

