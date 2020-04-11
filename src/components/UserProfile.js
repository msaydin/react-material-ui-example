import React, { Component } from 'react';
import './components.css';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <div class="card">
                    <img src={this.props.user.picture.large} alt={this.props.user.name.first + " " + this.props.user.name.last} />
                    <h1>{this.props.user.name.first + " " + this.props.user.name.last}</h1>
                    <p class="title">{this.props.user.email}</p>
                    <p>{this.props.user.location.country}</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;