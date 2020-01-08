import React from 'react'

interface IAppProps { }
interface IAppState { }

export default class Search extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {}
    }
    public render() {
        return (
            <div>
                Search
            </div>
       )
    }
}
