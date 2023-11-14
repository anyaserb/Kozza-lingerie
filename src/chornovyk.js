const [inputNumber, setInputNumber] = useState(1);

const removeNumber = () => {
  if (inputNumber > 0) {
    setInputNumber(inputNumber - 1);
  }
};

const addNumber = () => {
  setInputNumber(inputNumber + 1);
};


<div className={styles.numberBlock}>
<div className={styles.number}>
  <button onClick={removeNumber}>−</button>
  <input
    type="number"
    max={10}
    min={1}
    value={inputNumber}
    onChange={setInputNumber}
  />
  <button onClick={addNumber}>+</button>
</div>
<Link>Купівля оптом</Link>
</div>