import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Home from './content/home/Home'
import Lista from './content/lista/Lista'
import ListaArticulos from './content/articulos/Lista'
import FormularioArticulos from './content/articulos/Formulario'
import {httpGet} from '../../util/HttpRequest'

import axios from 'axios';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {stylePath: 'https://bootswatch.com/4/cerulean/bootstrap.min.css'};
    }

    componentDidMount() {
        window.ocultarLoading();
        /*let { history } = this.props;
        httpGet('/admins').then(
        function(response) {
           window.ocultarLoading();
        }).catch(function(error) {
            history.push(`/login`);
        });*/
       // this.setState({stylePath: 'https://bootswatch.com/4/cyborg/bootstrap.min.css'});
    }

    render(){
        return(
         <div>
             <link rel="stylesheet" type="text/css" href={this.state.stylePath}/>
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
                        <Route path="/dashboard/lista" component={Lista} />
                        <Route path="/dashboard/articulos/lista" component={ListaArticulos} />
                        <Route path="/dashboard/articulos/crear" component={FormularioArticulos} />
                    </div>
                  </div>
             </div>
         </div>
        );
    }

}

export default Dashboard;