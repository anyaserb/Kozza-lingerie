import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <p>
        Підписуйся на наші новини та отримуй 15% знижки <br /> на колекцію
        білизни Basic.
      </p>
      <input type="text" placeholder="Email" />
      <button>Підписатися</button>
    </div>
  );
};

export default Subscription;
