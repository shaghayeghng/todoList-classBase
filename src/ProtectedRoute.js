import React from 'react';
import {Route, Redirect} from 'react-router-dom';
//Redirect mese link baraye avaz karadn route hast (kare manteghi)

const ProtectedReact = ({ children, auth}) => {
    if(auth) {
        return <Route> {children}</Route>
    }
    else {
        return <Redirect to="/auth" />
    }
};

export default ProtectedReact;