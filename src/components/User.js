import React, { Component } from 'react';
import { Avatar, Dialog, DialogTitle, Button } from '@material-ui/core';
import UserProfile from './UserProfile';
import './components.css';

class User extends Component {

    constructor() {
        super()
        this.handleShowProfile = this.handleShowProfile.bind(this)
        this.handleClose = this.handleClose.bind(this)

        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <div>
                <div class="user">
                    <div class="avatar"><Avatar alt={this.props.user.Name} src={this.props.user.picture.medium} /></div>
                    <div class="name-surname"><h3>{this.props.user.name.first + " " + this.props.user.name.last}</h3></div>
                    <Button variant="contained" color="primary" onClick={this.handleShowProfile}>Show Profile</Button>
                </div>
                {this.renderUserProfileModal()}
            </div>
        )
    }

    renderUserProfileModal() {
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.showModal}>
                <DialogTitle id="simple-dialog-title"></DialogTitle>
                <UserProfile user={this.props.user} />
            </Dialog>
        )
    }

    handleShowProfile() {
        this.setState({ showModal: true });
    }

    handleClose() {
        this.setState({ showModal: false });
    }
}

export default User;