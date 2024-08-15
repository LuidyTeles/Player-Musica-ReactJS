function SelectorCharpters(props) {
  return (
    <button className="seletor">
      <i className="bi bi-list"></i>
      <p>{`chapter ${props.chapterNow}`}</p>
    </button>
  );
}

export default SelectorCharpters;
