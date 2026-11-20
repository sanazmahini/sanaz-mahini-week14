import { useState } from 'react'
import SquareCheck from '../../components/icons/SquareCheck'
import SquarePlus from '../../components/icons/SquarePlus'
import Search from '../../components/ui/Search'
import Table from '../../components/ui/Table'
import contacts from '../../data/contacts.json'
import ContactForm from './ContactForm'
import Button from './Button'
import UserMinus from '../icons/UserMinus'
import ArrowRotateLeft from '../icons/ArrowRotateLeft'
import './contacts.css'

const Contacts = () => {
  const [searchText, setSearchText] = useState('')
  const [contactData, setContactData] = useState(contacts)
  const [editContact, setEditContact] = useState(null)
  const [isAdding, setIsAdding] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [showCheckbox, setShowCheckbox] = useState(true)
  const [checked, setChecked] = useState([])

  const filteredData = contactData.filter(
    contact =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchText.toLowerCase())
  )

  const deleteContactHandler = id =>
    setContactData(prev => prev.filter(item => item.id !== id))
  const editContactHandler = contact => setEditContact(contact)

  const updateConatactHandler = newContact => {
    setContactData(prev =>
      prev.map(item => (item.id === newContact.id ? newContact : item))
    )
    setEditContact(null)
  }

  const addContactHandler = newContact => {
    const newId = contactData.length
      ? Math.max(...contactData.map(item => item.id)) + 1
      : 1
    setContactData(prev => [...prev, { ...newContact, id: newId }])
    setIsAdding(false)
  }

  const changeHandler = () => {
    setShowIcon(prev => !prev)
    setShowCheckbox(prev => !prev)
  }

  const deleteSelectContactHandler = id => {
    setChecked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const deleteSelectedContactsHandler = () => {
    setContactData(prev => prev.filter(item => !checked.includes(item.id)))
    setChecked([])
  }

  const cancelFormHandler = () => {
    setEditContact(null)
    setIsAdding(false)
  }

  return (
    <main className='contactsPage'>
      <section className='contactsCard'>
        <div className='contactsHeader'>
          <div>
            <span className='contactsEyebrow'>مدیریت دفترچه تلفن</span>
            <h1 className='contactsTitle'>مخاطبین من</h1>
            <p className='contactsDescription'>
              مخاطبینت رو اینجا مرتب و مدیریت کن.
            </p>
          </div>
          <div className='contactsCount'>
            <span>{contactData.length}</span>
            <small>مخاطب</small>
          </div>
        </div>

        {!editContact && !isAdding && (
          <>
            <div className='contactsToolbar'>
              <Search searchText={searchText} setSearchText={setSearchText} />
              <div className='contactsActions'>
                <Button className='addButton' onClick={() => setIsAdding(true)}>
                  <SquarePlus />
                  <span>مخاطب جدید</span>
                </Button>
                <Button
                  className={
                    showCheckbox ? 'iconButton' : 'iconButton activeButton'
                  }
                  onClick={changeHandler}
                  title='انتخاب مخاطبین'
                >
                  <SquareCheck />
                </Button>
                {showIcon && (
                  <>
                    <Button
                      className='deleteSelectedButton'
                      onClick={deleteSelectedContactsHandler}
                      title='حذف انتخاب‌شده‌ها'
                    >
                      <UserMinus />
                    </Button>
                    <span className='resetIcon' title='بازگشت'>
                      <ArrowRotateLeft />
                    </span>
                  </>
                )}
              </div>
            </div>
            <Table
              contactData={filteredData}
              onDelete={deleteContactHandler}
              onEdit={editContactHandler}
              showCheckbox={showCheckbox}
              checked={checked}
              onSelect={deleteSelectContactHandler}
            />
          </>
        )}

        {(editContact || isAdding) && (
          <ContactForm
            contact={editContact}
            onSave={editContact ? updateConatactHandler : addContactHandler}
            onCancel={cancelFormHandler}
          />
        )}
      </section>
      <p className='contactsFooter'>دفترچه مخاطبین · ساده و مرتب</p>
    </main>
  )
}
export default Contacts
