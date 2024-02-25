const Accordion = ({ props }) => {
  const handleClick = () => {
    const accordion = document.getElementById(props.question);
    const accordionAnswer = document.getElementById(props.answer);
    const accordionImg = accordion.children[1];
    accordionImg.style.opacity = 0;

    if (accordionAnswer.style.display === "block") {
      accordionAnswer.style.display = "none";
      accordionImg.src = "./images/icon-plus.svg";
    } else {
      accordionAnswer.style.display = "block";
      accordionImg.src = "./images/icon-minus.svg";
    }
    setTimeout(() => {
      accordionImg.style.opacity = 1;
    }, 100);
  };
  return (
    <div className="accordion">
      <div
        className="accordion-header"
        id={props.question}
        onClick={handleClick}
      >
        <p>{props.question}</p>
        <img src="./images/icon-plus.svg" alt="Plus sign" />
      </div>
      <p className="accordion-answer" id={props.answer}>
        {props.answer}
      </p>
    </div>
  );
};

export default Accordion;
