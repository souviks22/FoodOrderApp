import React, { useState } from 'react'
import Header from './components/TopBar/Header'
import Content from './components/Meals/Content'
import Overlay from './components/UI/Overlay'
import { CartContextProvider } from './cart-context'

const App = () => {
    const [isCartShow, setIsCartShow] = useState(false)
    const cartShowHandler = () => {
        window.scrollTo(0, 0)
        setIsCartShow(true)
    }
    const cartCloseHandler = () => {
        setIsCartShow(false)
    }

    return (<CartContextProvider>
        {isCartShow && <Overlay onCartClose={cartCloseHandler} />}
        <Header onCartShow={cartShowHandler} />
        <Content />
    </CartContextProvider>)
}

export default App