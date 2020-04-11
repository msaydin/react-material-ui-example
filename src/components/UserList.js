import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import User from './User';
import users from '../data/users';

class UserList extends Component {

    constructor() {
        super()
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
        this.getFilteredUsers = this.getFilteredUsers.bind(this)

        this.state = {
            users: users.results
        }
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.getFilteredUsers(event.target.value)
        } else {
            this.setState({ users: users.results })
        }
    }

    getFilteredUsers(searchString) {
        var filteredUsers = users.results.filter(function (item) {
            return item.name.first.match(searchString) || item.name.last.match(searchString)
        });
        this.setState({ users: filteredUsers })
    }

    render() {
        return (
            <div>
                {this.state.users ? (
                    <div>
                        <Grid container direction="column" alignItems="center" spacing={24} style={{ padding: 24 }}>
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <TextField style={{ padding: 24 }}
                                    id="searchInput"
                                    placeholder="Search for Users"
                                    margin="normal"
                                    onChange={this.onSearchInputChange}
                                />
                            </Grid>
                            {this.state.users.map(currentUser => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <User user={currentUser} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No users found"}
            </div>
        )
    }
}

export default UserList;