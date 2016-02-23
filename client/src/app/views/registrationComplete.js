import React from 'react';
import DocTitle from 'components/docTitle';

import Debug from 'debug';
let debug = new Debug("views:registrationComplete");

export default React.createClass( {
    propTypes:{
        isEmailCodeVerified: React.PropTypes.bool.isRequired
    },
    getInitialState() {
        return {
            errors: null
        };
    },
    componentDidMount(){
        debug("componentDidMount", this.props.params);
        this.verifyEmailCode(this.props.params.code);
    },

    componentWillUpdate() {
        debug("componentWillUpdate");
        if ( this.props.isEmailCodeVerified() ) {
            debug("componentDidMount router ", this.router);
            let path = '/login';
            this.router.push(path);
        }
    },

    render() {
        return (
            <div id="registration-complete">
                <DocTitle
                    title="Registering"
                />
                {this.renderError()}
                {this.renderRegistering()}
            </div>
        );
    },
    renderError(){
        if(this.state.errors){
            return (
                <div className="alert alert-danger text-center animate bounceIn" role="alert">
                    An error occured: {this.state.errors}
                </div>
            );
        }
    },
    renderRegistering(){
        if(!this.state.errors){
            return (
                <div className="alert alert-info text-center animate bounceIn" role="info">
                    Registering your account.
                </div>
            );
        }
    },
    verifyEmailCode(code) {
        debug("verifyEmailCode ", code);
        //TODO redux
        /*
        return authActions.verifyEmailCode(code)
        .then(this.onRegister)
        .catch(this.setErrors);*/
    },

    onRegister(){
        debug("onRegister");
    },

    setErrors(error) {
        debug("setErrors", error);
        if(error.responseJSON && error.responseJSON.error){
            this.setState( {
                errors: error.responseJSON.error.name
            } );
        } else {
            this.setState( {
                errors: "UnknownError"
            } );
        }
    }
} );
