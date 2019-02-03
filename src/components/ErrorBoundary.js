import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return <p>Error: {this.state.error.message}</p>
    }
    return this.props.children
  }
}
