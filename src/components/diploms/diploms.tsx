import Diplom from "../diplom/diplom";

function Diploms() : JSX.Element {
  return (
    <section className="diploms">
      <div className="small-container">
        <article className="info-column">
          <h2>Выдаём <span className="underline-wavy">дипломы</span> участникам</h2>
          <p>
            Жюри конкурса рассмотрит работы и выделит<br />
            победителей по городам и возрастным категориям,<br />
            а также определит другие номинации, подчеркнув<br />
            уникальную особенность каждого конкретного<br />
            рисунка — дипломы получат все дети!<br />
            <br />
            Скачать диплом можно будет в личном кабинете<br />
            через сутки после окончания конкурса,<br />
            дополнительно вышлем его на e-mail. <br />
            <br />
            Со слоном к победам напролом!
          </p>
        </article>
        <Diplom
          name="Гасенко Алина"
          place={1}
          competition="Мое счастливое лето"
          ageFrom={0}
          ageTo={4}
          city="Калуга"
          date="15.08.2022"
        />
      </div>
    </section>
  );
}

export default Diploms;
