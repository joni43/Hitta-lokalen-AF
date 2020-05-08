import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchOffices, fetchUser, fetchUserOffice } from './Store/actions/Data';

import { Layout } from './Containers/index';
import 'sanitize.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.loadOfficeData = this.loadOfficeData.bind(this);
  }

  loadOfficeData() {
    const { user, offices, fetchUserOffice } = this.props;
    const userOfficeID = user.officeID;

    const office = offices.map(id => id.id);

    office.forEach(id => {
      if (id === userOfficeID) {
        fetchUserOffice(userOfficeID);
      }
    });
  }

  componentDidMount() {
    const { fetchOffices, fetchUser, offices } = this.props;

    fetchUser();
    fetchOffices(offices);
  }

  componentDidUpdate() {
    const { user, offices } = this.props;

    if (user && offices) {
      this.loadOfficeData();
    }
  }
  render() {
    return (
      <div className='App'>
        <Layout />
      </div>
    );
  }
}

App.propTypes = {
  fetchOffices: PropTypes.func,
  fetchUserOffice: PropTypes.func,
  fetchUser: PropTypes.func,
  offices: PropTypes.array,
  user: PropTypes.object
};
const mapStateToProps = state => {
  return {
    user: state.fetchUser.user,
    offices: state.fetchOffices.offices,
    userOffice: state.fetchUserOffice.office,
    selection: state.selection
  };
};

const mapDispatchToProps = dispatch => ({
  fetchOffices: () => dispatch(fetchOffices()),
  fetchUserOffice: data => dispatch(fetchUserOffice(data)),
  fetchUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
