import React from 'react';
import Paper from 'material-ui/lib/paper';
import DocTitle from 'components/docTitle';
import MediaSigninButtons from 'components/mediaSigninButtons';
import LocalSignupForm from 'components/localSignupForm';

export default React.createClass( {
    propTypes:{
        registerCompleted: React.PropTypes.bool.isRequired
    },

    render() {

        return (
            <div id="signup">
                <DocTitle
                    title="Register"
                />
                { this.props.registerCompleted && this.renderRegisterComplete() }
                { !this.props.registerCompleted && this.renderRegisterForm() }

            </div>
        );
    },
    renderRegisterComplete(){
        return(
            <div className="alert alert-info text-center animate bounceIn" role="alert">
                A confirmation email has been sent. Click on the link to verify your email address and activate your account.
            </div>
        );
    },
    renderRegisterForm(){
        return (
            <Paper className="text-center login-view">
                <h2>Register An Account</h2>

                <p >Create a free account</p>

                <div className="row">
                    <div>
                        <LocalSignupForm />

                        <div className="strike"><span className="or"></span></div>
                        <div>
                            <MediaSigninButtons />
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
} );
