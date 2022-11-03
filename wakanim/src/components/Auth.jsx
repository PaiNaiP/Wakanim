import React, { Component } from 'react';
import bcrypt from 'bcryptjs';
import { createClient} from '@supabase/supabase-js';

class Auth extends Component {
    constructor(props){
        super(props);
        this.nameInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.dateofbirthInputRef = React.createRef();
        this.genderInputRef = React.createRef();
        this.state={
            password:'',
            passwordInput: ''
        };
    }
    async handleSignIn(e){
        e.preventDefault();
        let password = '';
        const email = this.emailInputRef.current.value;
        //const password = this.passwordInputRef.current.value;
        const supabase = createClient('https://eldtvxgjdhenbivgrzhz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHR2eGdqZGhlbmJpdmdyemh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc0NzY0NzksImV4cCI6MTk4MzA1MjQ3OX0.1j_9PZfwFvhHzscExj3yqFh5eecLTvadVrCf1qjInho')
        await supabase
        .from('clients')
        .select("*")
        .eq('email', email)
        .then((emailBase)=>{
            ///console.log(emailBase.data)
            // this.setState({
            //     password: emailBase.data[0].password
            // })
            password = emailBase.data[0].password
            console.log(password)
                bcrypt.compare(this.state.passwordInput, 
                password, function(err, isMatch){
                if(err)throw err;
                else if(!isMatch)console.log("Password doesn't match!");
                else console.log("Password matches");
            })
        })
    }
 
  render() {
    return (
        <form>
            <input type="email" placeholder='email' ref={this.emailInputRef}/>
            <input type="password" placeholder='password' onChange={(e) => {this.setState({passwordInput: e.target.value})}} value={this.state.passwordInput} ref={this.passwordInputRef}/>
            <button type='submit' onClick={(e)=>this.handleSignIn(e)}></button>
        </form>
    )
  }
}

export default Auth;