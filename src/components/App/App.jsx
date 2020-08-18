import * as React from 'react';

const App = () => (
  // <!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(47849594, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/47849594" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

	<div className="wrapper">
    <header className="site-header">

      <div className="pulse-beat"></div>

      <h1 className="site-header__title">Пульс паспортизации</h1>

      <p>1 августа - 1 сентября 2020</p>
    </header>

    <main className="site-body">
      <section className="body-part">
        <h2 className="body-part__head">Что это?</h2>

        <hr className="break-line" />

        <p>Проект частного исследования:</p>

        <p className="pulse-question">
          Актуальность паспортизации среди реконструкторов
        </p>

        <p>
          Это пробный выпуск, первый шаг для развития проекта ежегодного опроса среди сообщества реконструкторов - "Пульс паспортизации".
        </p>
      </section>

      <hr className="break-line" />

      <section className="pulse-call">
        <img className="pulse-call__image" src="/assets/decor/icons/vesy.png" />

        <h3 className="pulse-call__head">Ваш опыт ценен!</h3>

        <div className="pulse-balance">
          <div className="pulse-balance__item balance-item__left">Пишете паспорта?</div>
          <div className="pulse-balance__item balance-item__right">Отказались от них?</div>
        </div>

        <p>У вас наверняка есть причины - поделитесь этим!</p>

        <a className="button button--call2action" href="https://pulse.passportization.ru">
          Пройти опрос
        </a>
      </section>

      <hr className="break-line" />

      <section className="body-part">
        <h2 className="body-part__head">Зачем?</h2>

        <hr className="break-line" />

        <ul className="items-list">
          <li className="items-list__item">
            Cобрать обезличенные данные о том, каким образом люди работают с паспортами комплектов.
          </li>

          <li className="items-list__item">
            Сформировать общую картину паспортизации в современной реконструкции в России.
          </li>

          <li className="items-list__item">
            Узнать о проблемах в паспортизации и, быть может, найти их решения.
          </li>

          <li className="items-list__item">
            Сделать на основе этого проекта ежегодный "пульс", более грамотный с точки зрения социологии. Сейчас проект в экспериментальном режиме.
          </li>
        </ul>
      </section>

      <section className="body-part">
        <h2 className="body-part__head">А это безопасно?</h2>

        <hr className="break-line" />

        <p>Здесь не просят ваших имён, адрес, почту или номер телефона. Нет регистрирации и SMS.</p>

        <p>Есть только 15 вопросов.</p>

        <p>Все ответы анонимны.</p>

        <div className="call-to-action">
          <a className="button button--call2action" href="https://pulse.passportization.ru">
            Пройти опрос
          </a>
        </div>

        <p>
          Когда опрос закончится, все ответы будут сведены и опубликованы на отдельной странице в виде инфографики "о состоянии паспортизации в 2020 году" на сайте проекта.
        </p>
      </section>

      <hr className="break-line" />

      <section className="become-helper">
        <img className="become-helper__image" src="assets/decor/icons/lamp.svg" />

        <h3 className="become-helper__title">Знаете что можно улучшить?</h3>

        <p>
          Проект молодой и ему важна ваша поддержка.
        </p>

        <p>
          Я открыт для идей, предложений и замечаний: пожалуйста, свяжитесь со мной!
        </p>

        <div className="call-to-action">
          <a className="button button--dark" href="https://t.me/bargamut" target="_blank">
            Telegram
          </a>

          <a className="button button--dark" href="https://vk.bargamut.ru" target="_blank">
            ВКонтакте
          </a>

          <a className="button button--dark" href="https://fb.bargamut.ru" target="_blank">
            Facebook
          </a>
        </div>
      </section>

        <hr className="break-line" />

      <section className="social-shares">
        {/* <!-- <img className="social-shares__image" src="assets/decor/icons/Share.svg"> --> */}

        <h3 className="social-shares__title">Самый простой способ поддержать</h3>

        <p className="social-shares__description">
          Поделитесь этим сайтом с коллегами-реконструкторами: чем больше реконструкторов примет участие,
          тем достовернее будет результат.
        </p>

        <div className="social-shares__link-wrapper">
          <a className="social-shares__link social-icon__vk" data-soc="vk" title="Поделиться ВКонтакте" href="#">Поделиться ВКонтакте</a>
          <a className="social-shares__link social-icon__fb" data-soc="fb" title="Поделиться в Facebook" href="#">Поделиться в Facebook</a>
          <a className="social-shares__link social-icon__tw" data-soc="tw" title="Поделиться в Twitter" href="#">Поделиться в Twitter</a>
        </div>
      </section>

      <hr className="break-line" />

      <section className="body-part">
        <h2 className="body-part__head">Помощники</h2>

        <hr className="break-line" />

        <h3 className="body-part__subhead">Помощь в подготовке</h3>

        <ul className="project-helpers-list data-helpers"></ul>

        <hr className="break-line" />

        <h3 className="body-part__subhead">Информационная поддержка</h3>

        <ul className="project-helpers-list info-helpers"></ul>
      </section>
    </main>

    <hr className="break-line" />

    <footer className="site-footer">
      <p>© 2020 Paul "Bargamut" Petrov</p>

      <a href="https://bargamut.ru" target="__blank">bargamut.ru</a>
    </footer>
  </div>
);

export default App;
