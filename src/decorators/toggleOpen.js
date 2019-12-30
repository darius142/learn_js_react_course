import React, {Component} from 'react';

export default (OriginalComponent) => class WrapperComponent extends Component {

     constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.toggleClick = this.toggleClick.bind(this)
    }

    toggleClick = (ev) => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return <OriginalComponent {...this.state} toggleOpen={this.toggleClick} {...this.props} />
    }
    
}