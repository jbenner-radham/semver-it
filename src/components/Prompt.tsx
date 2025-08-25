export default function Prompt({ question, handleYesClick, handleNoClick }: {
  question: string;
  handleYesClick: () => void,
  handleNoClick: () => void
}) {
  return (
    <>
      <p>{question}</p>
      <button className="yes-no-button" onClick={handleYesClick} type="button">Yes</button>
      <button className="yes-no-button" onClick={handleNoClick} type="button">No</button>
    </>
  )
}
