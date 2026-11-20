import Button from '../ui/Button'
import './modal.css'
const Modal = ({textBtn,textBtnRefuse,onConfirm,onClose,children,text}) => (
  <div className='modalOverlay' onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}>
    <div className='modalBox' role='dialog' aria-modal='true'>
      <div className='modalIcon'>!</div><h3 className='modalTitle'>تأیید عملیات</h3>
      <p className='modalText'>{children||text||'آیا از انجام این عملیات مطمئن هستید؟'}</p>
      <div className='modalActions'>
        <Button className='modalConfirmButton' onClick={onConfirm}>{textBtn||'تأیید'}</Button>
        <Button className='modalCancelButton' onClick={onClose}>{textBtnRefuse||'انصراف'}</Button>
      </div>
    </div>
  </div>
)
export default Modal