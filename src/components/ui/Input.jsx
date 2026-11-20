import './input.css'
const Input = ({ type, text, value, checked, onChange, placeholder }) => (
  <div className='inputGroup'>
    {text && <label className='inputLabel'>{text}</label>}
    <input
      className={type === 'checkbox' ? 'checkInput' : 'formInput'}
      type={type}
      value={value ?? ''}
      checked={type === 'checkbox' ? checked : undefined}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
)
export default Input
