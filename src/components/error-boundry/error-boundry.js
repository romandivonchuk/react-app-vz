import React from 'react'

export default class ErrorBoundry extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        console.log('Did Catch')
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <p>Error Error Catch</p>
        }
        return this.props.children
    }
}