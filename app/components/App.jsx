import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Header';
import Campuses from './Campuses';
import Students from './Students';
import CampusStudent from './CampusStudent';

export default class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path='/campuses' component={Campuses} />
            <Route path='/students' component={Students} />
            <Route component={CampusStudent} />
            <Redirect to="/campuses" />
          </Switch>
        </main>
      </div>
    )
  }

}
