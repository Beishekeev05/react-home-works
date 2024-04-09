import './forms.css'

const Forms = () => {
  return (
    <div className='form'>
        <label htmlFor="">Enter your name</label><input type="text" /><br />
        <label htmlFor="">Enter your email</label><input type="email" />
        <button>Subscribe</button>
    </div>
  )
}

export default Forms