import axios  from 'axios'
// let fetch = axios.create({
//     baseURL:'', // 
//     timeout:5000, // 超时时间
// })



function fetch () {
    axios.get('http://source.daiyong77.com/data/list.php')
}
export default fetch