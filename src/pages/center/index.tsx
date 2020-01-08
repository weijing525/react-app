import React from 'react'
import { Link } from 'react-router-dom';
import fetch from '../../utils/request'
import Search from '../../component/search';

interface IProps { }
interface IAppState { }

export default class Center extends React.Component<IProps, IAppState> {
    constructor(props: IProps){
        super(props)
        this.state = {
            a: 1,
            b:23,
            c:!23,
        }
    }
    componentDidMount(){
        console.log(this.props)
        fetch()
    }
    public render() {
        console.log(123123213)
        return (
            <div>
                <div>
                    <Search />
                <div>123213</div>
                    <h1>个人中心</h1>
                    <h5><Link to="/center">center</Link></h5>
                    <h5><Link to="/home">home</Link></h5>
                    <h5><Link to="/Hook">Hook</Link></h5>
                </div>
            </div>
       )
    }
}
