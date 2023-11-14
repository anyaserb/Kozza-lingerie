import { useState } from "react";
import styles from "./TabsProduct.module.css";

const TabsProduct = (props) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <h5
          onClick={() => {
            setOpenTab(1);
          }}
          className={openTab === 1 ? styles.activeTab : styles.otherTab}
        >
          Характеристики
        </h5>
        <h5
          onClick={() => {
            setOpenTab(2);
          }}
          className={openTab === 2 ? styles.activeTab : styles.otherTab}
        >
          Рекомендації по догляду
        </h5>
        <h5
          onClick={() => {
            setOpenTab(3);
          }}
          className={openTab === 3 ? styles.activeTab : styles.otherTab}
        >
          Доставка
        </h5>
        <h5
          onClick={() => {
            setOpenTab(4);
          }}
          className={openTab === 4 ? styles.activeTab : styles.otherTab}
        >
          Примірка
        </h5>
        <h5
          onClick={() => {
            setOpenTab(5);
          }}
          className={openTab === 5 ? styles.activeTab : styles.otherTab}
        >
          Оплата
        </h5>
      </div>
      <div className={styles.line}></div>

      <div className={styles.content}>
        <div
          className={openTab === 1 ? styles.activeContent : styles.otherContent}
        >
          <div>
            {props.characteristics}
            <br /><br />
            <p className={styles.tabContentHeader}>Склад</p>
            {props.composition}
          </div>
        </div>
        <div
          className={openTab === 2 ? styles.activeContent : styles.otherContent}
        >
          <p>
            Для того, щоб білизна довго тобі слугувала та виглядала так само, як
            і при покупці, дотримуйся декількох правил: <br /> <br />— ручне
            прання знижує інтенсивність зносу білизни;
            <br /> <br /> — періть з використанням делікатних миючих засобів;{" "}
            <br /> <br />— не заношуйте білизну, періть бюстгальтер після 3-4
            надягань; <br /> <br />— користуйтеся спеціальною сіткою, якщо
            перете білизну в машині; <br /> <br />— не використовуйте
            відбілювачі з хлором, вони роз'їдають і стоншують тканину; <br />{" "}
            <br />— розділіть речі на білі і кольорові, не кладіть в один захід
            насичені кольори, які можуть злиняти.
          </p>
          <br /> <br />
          <p>
            Відбілити білизну можна аспірином, ацетил саліцилова кислота
            приводить в норму пожовклі і потемнілі речі. Але це не є панацеєю,
            слід акуратно приводити в порядок ніжні і тонкі тканини,
            випробувавши відбілювання спочатку на невеликій ділянці або на
            аналогічному виробі, якого не шкода. <br /> <br />
            Вироби ручної роботи не варто прати в машинці, тільки вручну, без
            викручування, просто сполосніть і дайте стекти воді.
          </p>
        </div>
        <div
          className={openTab === 3 ? styles.activeContent : styles.otherContent}
        >
          <p className={styles.tabContentHeader}>Нова Пошта </p>
          <p>До відділення - 80₴</p>
          <br />
          <p>На поштомат - 80₴</p>
          <br />
          <p className={styles.tabContentHeader}> Адресна доставка</p>
          <p> Доставка кур'єром - 100₴</p>
          <br />
          <p className={styles.tabContentHeader}>
            Самовивіз з магазину - безкоштовно
          </p>
        </div>
        <div
          className={openTab === 4 ? styles.activeContent : styles.otherContent}
        >
          <p>
            Наша колекція створена з любов'ю до деталей та розрахована на те,
            щоб кожна жінка відчула себе впевнено та вишукано. Вам достатньо
            вибрати ідеальний комплект, а ми гарантуємо якість та комфорт на
            кожному кроці. Не забувайте, що у наших магазинах ви можете не лише
            обрати ідеальний образ, а й особисто приміряти кожен товар.
            <br />
            <br />
            Завітайте до нас на примірку і відчуйте, як ваша краса засяє в
            найяскравіших відтінках! Наші фахівці з задоволенням допоможуть вам
            з вибором та забезпечать найвищий рівень обслуговування.
          </p>
        </div>
        <div
          className={openTab === 5 ? styles.activeContent : styles.otherContent}
        >
          <p className={styles.tabContentHeader}>Оплата при замовленні</p>
          <p>
            Ти можеш оплатити замовлення онлайн банківською картою Visa або
            MasterCard. Доставка товару можлива тільки після підтвердження
            платежу.
          </p>
          <br />
          <p className={styles.tabContentHeader}>Оплата при отриманні</p>
          <p>
            Оплата готівкою або картою в момент доставки замовлення. При сплаті
            у відділенні поштовий оператор стягує комісію у розмірі 20 грн + 2%
            від суми замовлення за грошовий переказ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabsProduct;
