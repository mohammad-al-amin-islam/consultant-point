import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">1.Difference between authorization and authentication</h5>
                    <p className="card-text">Ans: <br /> The differece between authorization and authentication is Authorization is to give permission to use some resources. And Authentication verifies  the user who are claiming on some action. Authorization happen after authentication. But Authentication is the first proccess of check identity.Authorization can't be seen but authentication does.Authorizaion is maintain by the organization but authentication is type of password ,pins etc set by the user</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">2.Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p className="card-text">Ans: <br /> I am using firebase for user authentication.And also host my project.<br />
                        The other option is using Okta,Auth0,Keycloak,Amazon Cognito etc.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">3.What other services does firebase provide other than authentication?</h5>
                    <p className="card-text">Ans: <br />
                        Cloud Storage,Cloud Firestore,
                        There are many services firebase provide.From them some important services are Google Analytics, Hosting, Cloud Functions,Predictions,Dynamic Links,Remote Config,Cloud Messaging
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;