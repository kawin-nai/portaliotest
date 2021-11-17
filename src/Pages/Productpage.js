import React from 'react'
import Productcard from '../Components/Productcard'
import '../sass/format.scss'

function Productpage() {
    return (
        <div>
            <div className="topbar">
                <button className="topbarbutton">Create new project</button>
            </div>
            <h2>Products</h2>
            <div className="wrapper">
                <Productcard img="https://images.unsplash.com/photo-1637008336770-b95d637fd5fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
                title="Test" desc="This is a test description "/>
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                <Productcard img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                title="Cookies" desc="This is a cookie" />
                
            </div>
        </div>
        
    )
}

export default Productpage
