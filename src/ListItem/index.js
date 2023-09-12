import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const ListItem = props => {
  const {eachTract, deleteTrack} = props
  const {id} = eachTract

  const onClickDeleteButton = () => {
    deleteTrack(id)
  }

  return (
    <li className="list-item">
      <div className="thumbnail-name-and-genre-container">
        <img src={eachTract.imageUrl} className="track-thumbnail" alt="track" />
        <div className="name-and-genre-container">
          <p className="name">{eachTract.name}</p>
          <p className="genre">{eachTract.genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-button-container">
        <p className="duration">{eachTract.duration}</p>
        <button
          id={eachTract.id}
          value={eachTract.id}
          className="delete-button"
          type="button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <AiOutlineDelete color="#cbd5e1" size={20} />
        </button>
      </div>
    </li>
  )
}

export default ListItem
