import React, { Component } from 'react';
import bcrypt from 'bcryptjs';
import { createClient} from '@supabase/supabase-js';

export default class Auth extends Component {
    constructor(props){
        super(props);
        this.nameInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.dateofbirthInputRef = React.createRef();
        this.genderInputRef = React.createRef();
    }
    async handleSignUp(e){
        e.preventDefault();
        const email = this.emailInputRef.current.value;
        const password = this.passwordInputRef.current.value;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const name = this.nameInputRef.current.value;
        const dateofbirth = this.dateofbirthInputRef.current.value;
        const gender = this.genderInputRef.current.value;
        const supabase = createClient('https://eldtvxgjdhenbivgrzhz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHR2eGdqZGhlbmJpdmdyemh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcwNTc0MDMsImV4cCI6MTk4MjYzMzQwM30.raPykFxbcV4VyGZogpi0W8F_45NqOCC12Qx82JtOBlQ')
        const { data, error } = await supabase
        .from('clients')
        .insert([
        { name: name,
        password:hashedPassword,
        date_of_birth: dateofbirth,
        gender: gender,
        roles_id: '2',
        email: email,
    },
  ])
        console.log(data);
        console.log(error)
    }
  render() {
    return (
        <form>
            <input type="text" placeholder='name' ref={this.nameInputRef} />
            <input type="email" placeholder='email' ref={this.emailInputRef}/>
            <input type="password" placeholder='password' ref={this.passwordInputRef}/>
            <input type="date" placeholder='dateofbirth' ref={this.dateofbirthInputRef} />
            <select ref={this.genderInputRef}>
                <option>Мужской</option>
                <option>Женский</option>
            </select>
            <button type='submit' onClick={(e)=>this.handleSignUp(e)}></button>
        </form>
    )
  }
}
