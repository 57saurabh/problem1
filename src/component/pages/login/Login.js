import React, {useState} from 'react'

function Login() {
    const [details, setDetails] = useState({email:'',
                                        password:''})

        // console.log(details)
  return (

    
    <div className='container mb-3 px-1 py-1'>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"
     id="exampleInputEmail1"
      aria-describedby="emailHelp"  value={details.email}
          onChange={e => {
            setDetails({
              ...details,
                email: e.target.value
            })}} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={details.password}
    onChange={e => {
      setDetails({
        ...details,
          password: e.target.value
      })}} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



    </div>
  )
}

export default Login