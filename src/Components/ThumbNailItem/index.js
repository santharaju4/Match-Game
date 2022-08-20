import './index.css'

const ThumbNailItem = props => {
  console.log(props)
  const {ThumbNail, onClickImage} = props
  const {id, thumbnailUrl} = ThumbNail

  const onClickImageItem = () => {
    onClickImage(id)
  }

  return (
    <li className="image-item">
      <button className="button " type="button" onClick={onClickImageItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="img " />
      </button>
    </li>
  )
}

export default ThumbNailItem
