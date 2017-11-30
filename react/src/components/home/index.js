import React from 'react';
import Header from '../header'
import Main from '../main'
import Main_lazy from '../main_lazy'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                
                <Header></Header>
                <Main></Main>
                <Main_lazy></Main_lazy>
                <section>
            {
            this.props.children
            }
            </section>
            </div>
        )
    }
}


