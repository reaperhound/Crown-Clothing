import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  return (
    <button 
    className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`}>
       {children}
    </button>
  )
}

export default ButtonComponent