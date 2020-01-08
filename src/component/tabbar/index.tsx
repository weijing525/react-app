import React, { Component } from 'react'

interface IAppProps { }
interface IAppState { }

export default class Tabbar extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {}
    }
    public render() {
        return (
            <ul className="tabbar">
                
            </ul>
       )
    }
}
