import { useState } from 'react'
import Ellipsis from '../icons/Ellipsis'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import Input from './Input'
import './tableRow.css'
const TableRow = ({
  contact,
  onDelete,
  onEdit,
  showCheckbox,
  checked,
  onSelect
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const deleteHandler = () => {
    onDelete(contact.id)
    setShowModal(false)
  }
  const closeModalHandler = () => setShowModal(false)
  return (
    <>
      <tr>
        <td className='contactName'>{contact.name}</td>
        <td>{contact.email}</td>
        <td className='contactActionsCell'>
          {showCheckbox ? (
            <Button
              className='rowMenuButton'
              onClick={() => setShowMenu(prev => !prev)}
              title='عملیات مخاطب'
            >
              <Ellipsis />
            </Button>
          ) : (
            <Input
              type='checkbox'
              value={contact.id}
              checked={checked.includes(contact.id)}
              onChange={() => onSelect(contact.id)}
            />
          )}
          {showMenu && (
            <div className='rowMenu'>
              <Button
                className='editMenuButton'
                onClick={() => {
                  onEdit(contact)
                  setShowMenu(false)
                }}
              >
                ویرایش
              </Button>
              <Button
                className='deleteMenuButton'
                onClick={() => {
                  setShowModal(true)
                  setShowMenu(false)
                }}
              >
                حذف
              </Button>
            </div>
          )}
          {showModal && (
            <Modal
              onConfirm={deleteHandler}
              onClose={closeModalHandler}
              text='آیا از حذف مخاطب مطمئن هستید؟'
              textBtn='حذف'
              textBtnRefuse='انصراف'
            />
          )}
        </td>
      </tr>
    </>
  )
}
export default TableRow
