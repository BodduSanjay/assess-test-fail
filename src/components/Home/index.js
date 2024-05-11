import Header from '../Header'
import './index.css'

const Home = props => {
  const StartAssessment = () => {
    const {history} = props
    history.replace('/assessment')
  }

  return (
    <div className="home-bg-container">
      <Header />
      <div className="home-down-cont">
        <div className="assessment-details-container">
          <h1 className="heading-instructions">Instructions</h1>
          <p className="details-para">
            1. <span className="details-span">Total Questions:</span> 10
          </p>
          <p className="details-para">
            2. <span className="details-span">Types of Questions:</span> MCQs
          </p>
          <p className="details-para">
            3. <span className="details-span">Duration:</span> 10 Mins
          </p>
          <p className="details-para">
            4. <span className="details-span">Marking Scheme:</span> Every
            Correct response, get 1 mark
          </p>
          <p className="details-para">
            5. All the progress will be lost, if you reload during the
            assessment
          </p>
          <button
            type="button"
            className="start-button"
            onClick={StartAssessment}
          >
            Start Assessment
          </button>
        </div>
        <img
          className="assessment-image"
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1715236483/ah2nqxr7wxwmefitbzmj.png"
          alt="assessment"
        />
      </div>
    </div>
  )
}
export default Home
