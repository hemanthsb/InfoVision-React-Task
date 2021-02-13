import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
                <h1 style={{color: "blue"}}> 
                Home Page </h1>
                <br/>
                <Link to='/imagePage'>
				<Button variant="btn btn-info">Image Display</Button>
				</Link>
            </div>
        );
    }

}