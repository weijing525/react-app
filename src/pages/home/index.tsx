import React from 'react'
import { Link } from 'react-router-dom'

interface IAppProps { }
interface IAppState { }

export default class Home extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        console.log(this.props)
    }
    public render() {
        console.log(this.props)
        return (
            <div>
                <h1>首页</h1>
                <h5><Link to="/center">center</Link></h5>
                <h5><Link to="/home">home</Link></h5>
            </div>
       )
    }
}