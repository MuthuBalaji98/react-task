import './body.css';
import { useEffect, useState } from 'react';
import FoodList from './foodlist';
import Form from './form';


// const images=[img1, img2, img3, img4, img5, img6];

// import {Component} from 'react';

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email:"",
//             password:"",
//             isValid:""
//         }
//     }

//     login(e) {
//         e.preventDefault();
//         localStorage.setItem('login',true)
//         this.props.isLoggedin(true);
//     }

//     // componentDidMount() {
//     //     fetch('https://6315c6c333e540a6d3840ed9.mockapi.io/login').then((response)=>{
//     //         if(response.ok) {
//     //             return response.json()
//     //         }
//     //         return false;
//     //     }).then((response)=>{
//     //         if(response) {
//     //             this.props.isLoggedin(true);
//     //         }
//     //     })
//     // }

//     componentDidUpdate(previousprops,previousState) {
//         console.log('mounted');
//         if(previousState.isValid !== true) {
//             if((this.state.email.includes('@') && this.state.password.length>4)) {
//                 this.setState((previousState)=>{
//                     return {...previousState,isValid:true}
//                 })
//             }
//         }
//     }

//     componentWillUnmount() {
//         console.log('component unmounted');
//     }

//      emailHandler(e) {
//         this.setState((previousState)=>{
//             return {...previousState,email:e.target.value}
//         })
//     }
            
//         passwordHandler(e) {
//             this.setState((previousState) => {
//                 return { ...previousState, password: e.target.value }
//             })
//         }
    
//         render() {
//             console.log('component rendered')
//             return (
    
//                 <form onSubmit={this.login.bind(this)}>
//                     <input type="email" placeholder="Enter email" onChange={this.emailHandler.bind(this)} value={this.state.email} />
//                     <input type="password" placeholder="Enter password" onChange={this.passwordHandler.bind(this)} value={this.state.password} />
//                     {this.state.isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}
    
//                 </form>
    
//             );
//         }
// }



function Body(props){
    // const [foods,setfoods]=useState([...foodlist]);
    // function updateFoods(newFoods){
    //   setfoods([...foods,newFoods])
    // }

    const foodList=[];
    const[foods,setFoods]=useState(foodList);

    const addBodyHandler=(foods)=>{
        fetch('https://6315c6c333e540a6d3840ed9.mockapi.io/Hotels',{
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
                },
            body: JSON.stringify(foods)
        }).then(res => res.json());
        
        setFoods((prevfoods)=>{
            return[...[foods],...prevfoods]
        })
        }

        useEffect(()=>{
            document.title="Food"
            const intervalId=setInterval(()=>{
                fetch('https://6315c6c333e540a6d3840ed9.mockapi.io/Hotels').then((response)=>{
                    if(response.ok){
                        return response.json()
                    }
                    return false;
                }).then((response)=>{
                    if(response){
                        setFoods(response);
                    }
                })
        },1000);
        return()=>{
            clearInterval(intervalId);
            }
        },[]);


        const clickHandler =()=>{
            setFoods((prevfoods)=>{
                return[...[{
                    "image":"img1",
                    "name":"New Ruchi",
                    "item":"Briyani",
                    "offer":10,
                    "price":150
                }], ...prevfoods]
            });
        }

        const logout =()=>{
            props.logout(false)
        }
        
    return(
        <div className='container'>
            <button onClick={logout}>Logout</button>
            <Form onFormAdded={addBodyHandler}></Form>
            <div className='wrapper'>
            <FoodList foods={foods}></FoodList>
            <button onClick={clickHandler}>Add Foods</button></div>
        </div>

    )
}

export default Body;