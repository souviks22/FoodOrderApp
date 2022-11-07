import React from 'react'
import useApp from './hooks/use-app'
import Header from './components/TopBar/Header'
import Content from './components/Meals/Content'
import Overlay from './components/UI/Overlay'
import { CartContextProvider } from './cart-context'

const App = () => {
    const [cart, conformation] = useApp()

    return (<CartContextProvider>
        {cart.isCartShown &&
            <Overlay
                onOrder={conformation.conformationShowHandler}
                onClose={cart.cartCloseHandler}
                cartModal
            />
        }
        {conformation.isConformationShown &&
            <Overlay
                onClose={conformation.conformationCloseHandler}
                conformModal
            />
        }
        <Header onCartShow={cart.cartShowHandler} />
        <Content />
    </CartContextProvider>)
}

export default App