import React, { Component, useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import './assets/css/Tcss.css'
import KYC from './Components/KYC'
import KYCShowcase from './Components/KYCShowcase'
import SpareShowcase from "./Components/spareShowcase";
import Multiple from './Components/MultipleShareKYC'
import CTI from './Components/CTI'
import KYB from './Components/KYB'
import SDKYB from './Components/supportingDocKYB'
import CI from './Components/CI'
import { CheckList } from './Components/checklist'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import MainDashboard from './Components/MainDashboard'
import LiveDashboard from './Components/Dashboards/LiveDashboard'
import TradingDashboard from "./Components/Dashboards/TradingDashboard";
import { Header } from './Components/Navbar'
import Applications from './Components/Application/Application'
import LoginT from './Components/LoginT'
import ApprovalForm from "./Components/Approval form/Approval";
// import checklistR from "./Components/CheckList/"
import MainApp from "./Components/Approval form/mainApp";
import AppDb from "./Components/Approval form/appDb";
import LostDB from "./Components/Approval form/lostdb";
import { firebase } from './Config'

function App() {
  const [user, setUser] = useState('')
  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      console.log(res)
      setUser(res)
    })
  }, [1])
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            {!user ? (
              <div>
                {/* <Header /> */}
                <Route exact path="/" component={LoginT} />
              </div>
            ) : (
              <div>
                <Header />
                <Route exact path="/" component={MainDashboard} />
                <Route exact path="/LiveDb" component={LiveDashboard} />
                <Route exact path="/TradingDb" component={TradingDashboard} />
                <Route exact path="/Applications" component={Applications} />
                <Route exact path="/App" component={ApprovalForm} />
                <Route exact path="/App/:urlid" component={ApprovalForm} />
                <Route exact path="/mainApp" component={MainApp} />
                <Route exact path="/appdb" component={AppDb} />
                <Route exact path="/lostappdb" component={LostDB} />

                <Route exact path="/ci" component={CI} />
                <Route exact path="/ci/:urlid" component={CI} />
                <Route exact path="/cti" component={CTI} />
                <Route exact path="/cti/:urlid" component={CTI} />
                <Route exact path="/kyc" component={KYC} />
                <Route exact path="/kyc/:urlid" component={KYC} />
                <Route exact path="/kycshowcase/:id" component={KYCShowcase} />
                <Route exact path="/kyb" component={KYB} />
                <Route exact path="/kyb/:urlid" component={KYB} />
                <Route exact path="/sdkyb" component={SDKYB} />
                <Route exact path="/sdkyb/:urlid" component={SDKYB} />
                <Route exact path="/check-List" component={CheckList} />
                <Route
                  exact
                  path="/spareshowcase/:id"
                  component={SpareShowcase}
                />

                <Route exact path="/check-List/:urlid" component={CheckList} />
                <Route
                  exact
                  path="/supporting-doc-kyb/:urlid"
                  component={SDKYB}
                />
              </div>
            )}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App
