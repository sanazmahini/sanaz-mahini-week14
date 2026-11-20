import './button.css'
const Button = ({children,onClick,variant,style,className='',type='button',title,disabled}) => (
  <button className={`appButton ${className}`} type={type} onClick={onClick}
    style={variant ? {backgroundColor:variant,...style} : style} title={title} disabled={disabled}>
    {children}
  </button>
)
export default Button