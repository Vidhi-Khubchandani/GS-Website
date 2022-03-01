import React from 'react'
import NavigationBar from './App/NavigationBar/NavigationBar';

import Footer from './App/Footer/Footer';
export default function Layout({ children }) {
    return (
        <>
            <NavigationBar />
          
            {children}
            <Footer />
        </>
    )
}
