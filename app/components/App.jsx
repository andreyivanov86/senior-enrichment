import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Header';
import Campuses from './Campuses';
import Students from './Students';
import CampusStudent from './CampusStudent';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

// The main View
export default class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path='/add-student' component={AddStudent} />
            <Route path='/student/:id' component={EditStudent} />
            <Route path='/campuses/:id' component={CampusStudent} />
            <Route path='/campuses' component={Campuses} />
            <Route path='/students' component={Students} />
            <Redirect to="/campuses" />
          </Switch>
        </main>
      </div>
    )
  }
}
