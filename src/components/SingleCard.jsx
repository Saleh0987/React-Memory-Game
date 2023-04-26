import './SingleCard.css'

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
      if (!disabled) {
        handleChoice(card)
      }
    }

  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt="Card Front" />
            <img 
              className='back' 
              src="/img/wall.jpg" 
              onClick={handleClick} 
              alt="Card Back" />
        </div>
    </div>
  )
}

export default SingleCard

