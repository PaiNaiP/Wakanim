import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

export const HmComp = () => {
   const [bbb, setBBB] = useState([])
    const SupaCont = async()=>{
        const supabase = createClient('https://eldtvxgjdhenbivgrzhz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHR2eGdqZGhlbmJpdmdyemh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcwNTc0MDMsImV4cCI6MTk4MjYzMzQwM30.raPykFxbcV4VyGZogpi0W8F_45NqOCC12Qx82JtOBlQ')
        let {data} = await supabase
        .from('genres')
        .select('*')
        setBBB(...data);
    }
    
  return (
    <div style={{background: '#141719', display:'flex'}}>
        <div style={{color:'white'}}>
            <h1>Demon Slayer: Kimetsu no Yaiba</h1>
            <p>Сезон 2</p>
            <p>Приключения | Боевик | Драма | Фэнтези | Сверхъестественное</p>
            <button></button>
        </div>
        <div>
            <img src="https://i.pinimg.com/564x/9d/1a/97/9d1a97542a33ccfae40a31139363c76c.jpg" 
            alt="kimetsu no yaba" 
            style={{width:'450 px', 
            margin:'70px', 
            marginBottom:'85px'}}/>
        </div>
    </div>
  )
}
