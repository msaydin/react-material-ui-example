import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class NavBar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            React Material UI Example
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;