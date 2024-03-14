import './ProjectCard.scss'
import { Link } from 'react-router-dom'

export default function ProjectCard({id, title, URL, tags, imageURL}) {
  return (
    <Link to={URL} id={id} className='card'>
        <img src={imageURL} alt={title}></img>
        <p>{title}</p>
        <ul>
            <li>{tags}</li>
        </ul>
    </Link>
  )
}
