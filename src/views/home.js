import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Jumbotron,Card,CardImg,CardSubtitle,CardTitle,Row,Col} from 'reactstrap'
import Moment from 'react-moment'
import tokyo from "../assets/tokyo.jpg";

// KEYS
const client_id = 'TVUJEWSREJWZB0JX5J1LG5GRMP1MBBHZJ54OP3TRN3JWHD42';
const client_secret = 'URGVNC45VCJVP2TXAK5TPOTI45BPLE2N2V1DQFZBAMIJ4CVS'
const api_key = 'ea5793a486ed19d130887c2ac9283ae0'
// API

const get_place_details = `https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&v=20180323&limit=5&categoryId=4deefb944765f83613cdba6e`
const get_current = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const get_forecast = `https://api.openweathermap.org/data/2.5/forecast?cnt=5&units=metric&q=`

class Home extends Component {
    constructor(props) {
        
        super(props);

        this.state = {
            selected:{
                city:'Tokyo',
                country:'JP'
            }
        };
    }

    UNSAFE_componentWillReceiveProps () {
        this.getPlaceDetails();
        this.getPlaceWeatherCurrent();
        this.getPlaceWeatherForecast();
    }
    componentDidMount(){
        this.getPlaceDetails();
        this.getPlaceWeatherCurrent();
        this.getPlaceWeatherForecast();
    }


    getPlaceDetails () {
        const {selected} = this.state;
        fetch(get_place_details+`&near=${this.props.selected_city+',JP'}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    city_details: result.response,
                })
                console.log(this.state.city_details)
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    getPlaceWeatherForecast () {
        const {selected} = this.state;
        fetch(get_forecast+this.props.selected_city+',JP'+`&APPID=${api_key}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    forecast: result.list
                })
                console.log(this.state.current_forecast)
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    getPlaceWeatherCurrent () {
        const {selected} = this.state;
        fetch(get_current+this.props.selected_city+','+selected.country+`&APPID=${api_key}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    current_forecast: result
                })
                console.log(this.state.current_forecast)
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        const {selected, forecast, current_forecast, city_details} = this.state;
        const venues = city_details ? city_details.venues :'';
        return (
            <div>
            {forecast && current_forecast?
                <div>
                    <header className={"bg-main"}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                                <h1 className="display-3">{this.props.selected_city}, Japan</h1>
                                <p className="lead mb-0">
                                    <Moment format="LLL">{current_forecast.dt_txt}</Moment>
                                </p>
                        </div>
                        </div>
                    </div>
                    </header>
                    <div className="container">
                        <Row className="current-container">
                            <Col md="2" align="center">
                                <img src={"http://openweathermap.org/img/wn/"+current_forecast.weather[0].icon+"@2x.png"}/>
                                <br/>
                                <span className="current-temp">{current_forecast.main.temp}°C</span>
                            </Col>
                            <Col md="6" xs="12" className="current-weather text-lg-left text-center">
                                <h2>{current_forecast.weather[0].main}</h2>
                                <p>{current_forecast.weather[0].description}</p>
                            </Col>
                            <Col md="4" className="current-weather" align="right">
                                <p>Humidity: {current_forecast.main.humidity}%</p>
                                <p>Wind: {current_forecast.wind.speed}kph</p>
                            </Col> 
                        </Row>
                        <Row>
                            {
                                forecast.map((weather, i)=>
                                    <Col className={"weather-list"} key={i} align="center">
                                        <p>
                                            <Moment format="LT">{weather.dt_txt}</Moment>
                                        </p>
                                        <img src={"http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png"}/><br/>
                                        <p>{weather.weather[0].main}</p>
                                        <p className="current-temp">{weather.main.temp}°C</p>
                                    </Col>
                                )
                            }
                        </Row>
                        <h1 className="page-header">Tourist Attractions</h1>
                        <Row>
                            {
                                venues.length?
                                venues.map((venue, j)=>
                                    <Col lg="12" key={j} align="left">
                                        <p className="current-temp">{venue.name}</p>
                                    </Col>
                                ):''
                            }
                        </Row>
                    </div>
                    </div>
                :'LOADING'    
                }
            </div>
        );
    }
}


export default withRouter(Home);
