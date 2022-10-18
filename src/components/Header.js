import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

function Header ({ title, onAdd, showAdd }) {
  const location = useLocation()

  return (
    <header className="header">
      <h1 className="logo">{title}</h1>
      {location.pathname === '/' && (
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker App'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Header