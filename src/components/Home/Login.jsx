import './Login.css'
import loginimg from '../../images/FreepikExport202404290722035Axc1.png'

export default function Login() {
  return (

    <>
      <div className="login-background">
        <div className="outer-formdiv">

          <div className="login-form">
            <h1>LOGIN</h1>
            <input type="mail" placeholder='Email' /> <br />
            <input type="password" placeholder='Password' />
            <button className='login-btn'>Login</button> <br />
            <button className='loginw-google'>Login with google</button>
          </div>
          <div className="form-design">
            <div>
              <img src={loginimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
