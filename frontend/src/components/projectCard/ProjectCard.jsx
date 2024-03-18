import './ProjectCard.scss'
import { Link } from 'react-router-dom'

export default function ProjectCard({id, title, URL, tags, imageURL}) {
  return (


    <Link to={URL} id={id} target='_blank' className='card'>
        <img src={imageURL} alt={title}></img>
        <p>{title}</p>
        <ul>
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    </Link>
  )
}
