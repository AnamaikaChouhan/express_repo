export  default function login(){
    return `
    <form action="/submit" method="post">         <input type="text" placeholder ="Enter Name"/>
      <br> <br> 
        <input type="passdword" placeholder="Enter Password"/>
        <br> <br>
       <button >Login</button>
       <a href='/'>Go to home</a>
       `
    
}