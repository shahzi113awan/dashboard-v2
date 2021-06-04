import React, { Component, useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/css/Tcss.css'
import './assets/css/pre-approval.css'
import KYC from './Components/KYC'
import KYCShowcase from './Components/KYCShowcase'
import SpareShowcase from './Components/spareShowcase'
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
import TradingDashboard from './Components/Dashboards/TradingDashboard'
import IntegrationDashboard from './Components/Dashboards/IntegrationDashboard'
import Missing from './Components/Dashboards/Missing'
import ArchiveDashboard from './Components/Dashboards/ArchiveDashboard'
import { Header } from './Components/Navbar/Navbar'
import Applications from './Components/Application/Application'
import LoginT from './Components/LoginT'
import ApprovalForm from './Components/Approval form/Approval'
// import checklistR from "./Components/CheckList/"
import MainApp from './Components/Approval form/mainApp'
import AppDb from './Components/Approval form/appDb'
import MainAppDb from './Components/Approval form/mainAppDb'
import LostDB from './Components/Approval form/lostdb'
import SolutionNav from './Components/Solutions/SolutionNav'
import SolutionNavParam from './Components/Solutions/SolNavParams'
import SOLDB from './Components/Solutions/SolutionDB'
import SolApp from './Components/Solutions/Application'
import NewContact from './Components/Solutions/Newcontact'
import ContactDB from './Components/Solutions/contactDB'
import PREApp from './Components/Workbooks/PRE-APPWorkBook'
import PreApproval from './Components/PreApproval'
import Dashboard from './Components/Dashboard'
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
                <Route exact path='/' component={LoginT} />
              </div>
            ) : (
              <div>
                <Header />
                {/* <Route exact path='/' component={Dashboard} /> */}
                <Route exact path='/preappw' component={PreApproval} />
              <Route exact path='/preappw/:urlid' component={PreApproval} />

                <Route exact path="/" component={MainDashboard} />
                <Route exact path='/LiveDb' component={LiveDashboard} />
                <Route exact path='/TradingDb' component={TradingDashboard} />
                <Route exact path='/ArchiveDb' component={ArchiveDashboard} />
                <Route
                  exact
                  path='/integrationDb'
                  component={IntegrationDashboard}
                />
                <Route exact path='/drafts' component={Missing} />
                <Route exact path='/Applications' component={Applications} />
                <Route exact path='/App' component={ApprovalForm} />
                <Route exact path='/App/:urlid' component={ApprovalForm} />
                <Route exact path='/mainApp' component={MainApp} />
                <Route exact path='/appdb' component={AppDb} />
                <Route exact path='/mainappdb' component={MainAppDb} />
                <Route exact path='/lostappdb' component={LostDB} />
                <Route exact path='/preappworkbook' component={PREApp} />

                <Route exact path='/ci' component={CI} />
                <Route exact path='/ci/:urlid' component={CI} />
                <Route exact path='/cti' component={CTI} />
                <Route exact path='/cti/:urlid' component={CTI} />
                <Route exact path='/kyc' component={KYC} />
                <Route exact path='/kyc/:urlid' component={KYC} />
                <Route exact path='/kycshowcase/:id' component={KYCShowcase} />
                <Route exact path='/kyb' component={KYB} />
                <Route exact path='/kyb/:urlid' component={KYB} />
                <Route exact path='/sdkyb' component={SDKYB} />
                <Route exact path='/sdkyb/:urlid' component={SDKYB} />
                <Route exact path='/check-List' component={CheckList} />
                <Route exact path='/solution-nav' component={SolutionNav} />
                <Route
                  exact
                  path='/solution-nav/:urlid'
                  component={SolutionNav}
                />
                <Route
                  exact
                  path='/solution-nav-params'
                  component={SolutionNavParam}
                />
                <Route
                  exact
                  path='/solution-nav-params/:urlid'
                  component={SolutionNavParam}
                />
                <Route exact path='/solution-app' component={SolApp} />
                <Route exact path='/solution-DB' component={SOLDB} />
                <Route exact path='/contact' component={NewContact} />
                <Route exact path='/contact/:urlid' component={NewContact} />
                <Route exact path='/contact-list' component={ContactDB} />

                <Route
                  exact
                  path='/spareshowcase/:id'
                  component={SpareShowcase}
                />

                <Route exact path='/check-List/:urlid' component={CheckList} />
                <Route
                  exact
                  path='/supporting-doc-kyb/:urlid'
                  component={SDKYB}
                />
              </div>
            )}
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
