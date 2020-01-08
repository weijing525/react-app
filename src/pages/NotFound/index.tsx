import React from 'react'

interface IAppProps { }
interface IAppState { }

export default class NotFound extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {}
    }
    public render() {
        return (
            <div>
                <h1>404</h1>
            </div>
       )
    }
}
