import './index.css'

const ImageOptionItem = ({each, setId, selectedOptionsList}) => {
  const updatedData = {
    id: each.id,
    text: each.text,
    imageUrl: each.image_url,
    isCorrect: each.is_correct,
  }
  const {id, text, imageUrl, isCorrect} = updatedData

  const isSelected = selectedOptionsList.some(cat => cat.id === id)

  const optionClicked = () => {
    setId(id, isCorrect, isSelected)
  }
  return (
    <li className="list-image-item-style" key={id}>
      <button
        type="button"
        className={isSelected ? 'active-image-style' : 'normal-image-style'}
        onClick={optionClicked}
      >
        <img className="image-style" src={imageUrl} alt={text} />
      </button>
    </li>
  )
}
export default ImageOptionItem
