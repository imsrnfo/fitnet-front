import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/login.css'
import Imagen from './img/gym-icon.png';
import {login} from '../../util/HttpRequest'
import LoadingSpinner from '../../components/loading/LoadingSpinner'

class Login extends Component{

    constructor(props) {
        super(props);
        this.botonLoginClick = this.botonLoginClick.bind(this);
    }

    componentDidMount() {
        this.refs.child.ocultarLoading();
    }

    botonLoginClick(event){
        event.preventDefault();
        this.refs.child.mostrarLoading();
        let componente = this;
        login(this.refs.username.value,this.refs.password.value).then(
        function(response) {
            componente.props.history.push(`/dashboard`);
        }).catch(function(error) {
            componente.refs.child.ocultarLoading();
            alert("Error de Autenticacion");
        });
    }

    render(){
        return(
            <div>
                <LoadingSpinner ref="child" />
                <div className="center-div pb-5">
                    <div className="text-center row">
                        <div className="col-md-8 mx-auto fade-in">
                            <div className="mb-3">
                                <img alt="image" className="imagen m-b-md" src={Imagen}/>
                            </div>
                            <div className="mb-3 opacity-7">
                                <h3>Bienvenido a FIT-NET</h3>
                                <p>
                                    Diseñada especificamente para administrar gimnasios en todo el país.
                                    <br/>
                                    Inicia sesion o solicita una cuenta.
                                </p>

                            </div>
                            <form onSubmit={this.botonLoginClick}>
                                <input className="form-control mb-3" ref="username" placeholder="username = admin" />
                                <input className="form-control mb-3" ref="password" placeholder="password = password" />
                                <button className="w-100 btn btn-primary mx-auto mb-2">Login</button>
                            </form>
                            <a href="#"><small>Olvidaste tu Contraseña?</small></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;