import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
  } from 'reactstrap';
import logo from "../assets/japan.svg";
import icon_select from "../assets/location.png"

export default class Nav extends Component {
    render() {
        const {cities, selected_city} = this.props
        return (
            <Navbar color="light" light expand="md" className="sticky-top">
                <NavbarBrand href="/">
                    <img className="nav-logo" src={logo}/><span>天気</span>
                </NavbarBrand>
                <div className="nav navbar-right top-nav nav">
                    <UncontrolledDropdown>
                        <DropdownToggle className="caret-container">
                            <img src={icon_select} className="caret-icon" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            {
                                cities.map((city, i)=>
                                    <DropdownItem key={i} onClick={()=>this.props.handleCityChange(city.name)}>
                                        {city.name}
                                    </DropdownItem>
                                )
                            }
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <span className="location-text">{selected_city}</span>
                </div>
            </Navbar>
        );
    }
}
