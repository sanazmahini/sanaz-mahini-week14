import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'
import './contactForm.css'
const ContactForm = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact?.name || '')
  const [email, setEmail] = useState(contact?.email || '')
  const [job, setJob] = useState(contact?.job || '')
  const [mobile, setMobile] = useState(contact?.mobile || '')
  const [showModal, setShowModal] = useState(false)
  const saveEditHandler = () => {
    const updateContact = { ...(contact || {}), name, email, job, mobile }
    onSave(updateContact)
    setShowModal(false)
  }
  return (
    <section className='contactForm'>
      <div className='formHeader'>
        <div>
          <span className='formEyebrow'>اطلاعات مخاطب</span>
          <h2>{contact ? 'ویرایش مخاطب' : 'افزودن مخاطب جدید'}</h2>
        </div>
      </div>
      <div className='formGrid'>
        <Input
          type='text'
          text='نام و نام خانوادگی'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='نام مخاطب را وارد کنید'
        />
        <Input
          type='email'
          text='ایمیل'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='example@email.com'
        />
        <Input
          type='text'
          text='شغل'
          value={job}
          onChange={e => setJob(e.target.value)}
          placeholder='شغل مخاطب'
        />
        <Input
          type='text'
          text='تلفن همراه'
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          placeholder='شماره تماس'
        />
      </div>
      <div className='formActions'>
        <Button
          className='saveButton'
          onClick={() => setShowModal(true)}
          disabled={!name.trim() || !email.trim()}
        >
          {contact ? 'اعمال تغییرات' : 'ثبت مخاطب'}
        </Button>
        <Button className='cancelButton' onClick={onCancel}>
          انصراف
        </Button>
      </div>
      {showModal && (
        <Modal
          onConfirm={saveEditHandler}
          textBtn={contact ? 'اعمال تغییرات' : 'ثبت مخاطب'}
          onClose={() => setShowModal(false)}
          textBtnRefuse='انصراف'
        >
          {contact
            ? 'آیا از اعمال تغییرات اطمینان دارید؟'
            : 'اطلاعات مخاطب جدید ثبت شود؟'}
        </Modal>
      )}
    </section>
  )
}
export default ContactForm
