import TableRow from './TableRow'
import './table.css'
const Table = ({
  contactData,
  onDelete,
  onEdit,
  showCheckbox,
  checked,
  onSelect
}) => (
  <div className='tableWrap'>
    <table className='contactsTable'>
      <thead>
        <tr>
          <th>نام و نام خانوادگی</th>
          <th>ایمیل</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {contactData.map(contact => (
          <TableRow
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
            showCheckbox={showCheckbox}
            checked={checked}
            onSelect={onSelect}
          />
        ))}
      </tbody>
    </table>
    {contactData.length === 0 && (
      <div className='emptyContacts'>مخاطبی برای نمایش پیدا نشد.</div>
    )}
  </div>
)
export default Table
