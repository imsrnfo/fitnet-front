import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Home from './content/home/Home'
import axios from 'axios';

class Dashboard extends Component{

    constructor(props) {
        super(props);
        let authToken = localStorage.getItem("JWT");
        if (authToken === null) {
            axios.defaults.headers.common.Authorization = null;
            this.props.history.push(`/login`);
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        }
    }

    componentDidMount() {
        let { history } = this.props;
        axios.get("http://localhost:8080/admins", {} ).then(function(response) {
            window.ocultarLoading();
        }).catch(function(error) {
            history.push(`/login`);
        });
    }

    render(){
        return(
         <Router>
                <div id="loading-screen">
                    <div id="loading-spinner">
                        <div className="lds-ring">
                            <div className="border-bottom border-primary"></div>
                            <div className="border-bottom border-primary"></div>
                            <div className="border-bottom border-primary"></div>
                            <div className="border-bottom border-primary"></div>
                        </div>
                    </div>
                </div>
                 <div className="wrapper">
                      <Sidebar></Sidebar>
                      <div id="content">
                       <Header></Header>
                        <div id="page-content" className="p-5">
                             <Route path="/dashboard/home" component={Home} />
                        </div>
                      </div>
                 </div>
         </Router>
        );
    }

}

export default Dashboard;