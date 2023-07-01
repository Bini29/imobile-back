import React from "react";
import FuterBunner from "../../components/FuterBunner/FuterBunner";
import styles from "./About.module.css";
import Title from "../../components/Title/Title";
import img1 from "../../assets/bg1.png";
import phonedesk from "../../assets/phonedesk.png";
import abi1 from "../../assets/abi1.png";
import abi2 from "../../assets/abi2.png";
import abi3 from "../../assets/abi3.png";
import phone from "../../assets/phone.svg";
import sert from "../../assets/aboutsert.png";

const about = () => {
  return (
    <div>
      <Title text={"О компании"} img={img1.src} />
      <div className={styles.desk}>
        <div className="container">
          <img className={styles.img} src={phonedesk.src} alt="" />
          <div className={styles.deskD}>
            <h2>О компании Imobile</h2>
            <p>
              За годы работы компании iMobile удалось собрать команду молодых
              профессионалов, которые не привыкли останавливаться на
              достигнутом, двигаясь в ногу со временем. Несколько лет опыта в
              сфере мобильной электроники дают нам возможность квалифицированно
              консультировать наших клиентов. Предлагаемый нами товар проходит
              тщательный отбор и проверку, мы выбираем только самое лучшее,
              перспективное и передовое. Мы также рады предложить услуги нашего
              сервисного центра если Ваше устройство Apple нуждается в ремонте.
              Вам помогут квалифицированные специалисты имеющие огромный
              практический опыт, необходимые навыки и инструменты, предлагая
              потребителям высококлассный сервис по обслуживанию электроники.
              Предлагаем Вашему вниманию большой выбор устройств компаний:
              Apple, Samsung, Xiaomi, GoPro, Harman Kardon, JBL, Sennheiser,
              Marshall, Sony, Bang@Olufsen
            </p>
            <p>
              В наших магазинах широко представлен ассортимент чехлов, зарядных
              устройств, защитных пленок, накладок известных брендов: Hoco,
              Capdase, Rock, Deppa, Melkco, Beckberg, Baseus GoPro, RedLine,
              Xiaomi, StoneGuard, Guess, G-Case, iWood, Remax, Proda, Adata
            </p>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <div className="container">
          <h2>Команда компании руководствуется тремя простыми правилами:</h2>
          <div className={styles.teamList}>
            <div>
              <img src={abi1.src} alt="" />
              <p>
                При работе с Клиентами крайне важна честность, поэтому база
                постоянных покупателей нашего интернет-магазина постоянно и
                неуклонно расширяется.
              </p>
            </div>
            <div>
              <img src={abi2.src} alt="" />
              <p>
                Мы ставим в приоритет долгосрочные отношения с нашими Клиентами
                , поэтому в своей работе мы используем инновационные инструменты
                маркетинга, расширяем товарную линейку, совершенствуем
                обслуживание.
              </p>
            </div>
            <div>
              <img src={abi3.src} alt="" />
              <p>
                Нам интересно то что мы делаем, поэтому мы находимся в курсе
                текущих тенденций бизнеса и рынка, в итоге каждый довольный
                Покупатель гордость для любого работника компании.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tituls}>
        <div className="container">
          <div className={styles.titulsBtn}>
            <p>
              Мы ответим на все Ваши вопросы, предложим различные варианты
              <br />
              товаров и решений, постараемся удовлетворить все Ваши запросы
            </p>
            <button className={styles.aboutBtn}>
              <img src={phone.src} alt="" /> Заказать звонок
            </button>
          </div>
          <p className={styles.titulsDesk}>
            Надеемся, что Вы войдёте в число довольных наших покупателей! В
            ассортименте всегда есть подходящее <br /> решение, которое
            заинтересует не только физических лиц, но и корпоративных заказчиков
          </p>
          <img className={styles.sert} src={sert} alt="" />
        </div>
      </div>
      <FuterBunner />
    </div>
  );
};

export default about;
