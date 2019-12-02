import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Navbar  from './components/navbar';
import Home from './views/home';

const pckgeJSON = require('../package.json');

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            cities: [
                {name:'Tokyo'},
                {name:'Yokohama'},
                {name:'Kyoto'},
                {name:'Osaka'},
                {name:'Sapporo'},
                {name:'Nagoya'},
            ],
            selected_city:'Tokyo'
        }
        this.handleCityChange = this.handleCityChange.bind(this)
    }

    handleCityChange(location){
        this.setState({selected_city:location})
    }

    renderMain () {
        return (
            <div id="wrapper">
                <Navbar cities={this.state.cities} selected_city={this.state.selected_city} handleCityChange={this.handleCityChange}/>
                <div className="ss-content">
                    <Home cities={this.state.cities} selected_city={this.state.selected_city}/>
                </div>
            </div>
        );
    }


    render() {
        return (
            <div>
                {this.renderMain('')}
            </div>  
                
        );
    }
}

export default withRouter(App);
