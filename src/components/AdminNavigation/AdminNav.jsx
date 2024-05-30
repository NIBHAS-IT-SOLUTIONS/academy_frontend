import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <>
    <nav>
        <ul>
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/enrolls">Enroll</Link>
          </li>
          <li>
            <Link to="/admin/classes">Classes</Link>
          </li>
          <li>
            <Link to="/admin/subjects">Subjects</Link>
          </li>
          <li>
            <Link to="/admin/questions">Questions</Link>
          </li>
          <li>
            <Link to="/admin/patterns">Pattern Questions</Link>
          </li>
        </ul>
      </nav>
      
      
   </>
  )
}

export default AdminNav
