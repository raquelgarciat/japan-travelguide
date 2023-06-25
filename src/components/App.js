import '../styles/App.scss';
import { useState } from 'react';
import calendar from '../images/calendar.png';

const App = () => {
  const [isHoveringPlan, setIsHoveringPlan] = useState(false);
  const [isHoveringFlight, setIsHoveringFlight] = useState(false);
  const [isHoveringCity, setIsHoveringCity] = useState(false);
  const [isHoveringTrans, setIsHoveringTrans] = useState(false);
  const [isClickedPlan, setIsClickedPlan] = useState('collapsed');
  const [isClickedLanding, setIsClickedLanding] = useState('');
  const [isClickedFlight, setIsClickedFlight] = useState('collapsed');
  const [isClickedCity, setIsClickedCity] = useState('collapsed');
  const [isClickedTrans, setIsClickedTrans] = useState('collapsed');

  const [navPlan, setNavPlan] = useState(<i class='fa-solid fa-pencil'></i>);
  const [navFlight, setNavFlight] = useState(
    <i class='fa-solid fa-plane-departure'></i>
  );
  const [navCity, setNavCity] = useState(<i class='fa-solid fa-city'></i>);
  const [navTrans, setNavTrans] = useState(
    <i class='fa-solid fa-train-subway'></i>
  );

  const handleClickNavPlan = () => {
    setIsClickedPlan('');
    setIsClickedLanding('collapsed');
    setIsClickedCity('collapsed');
    setIsClickedTrans('collapsed');
    setIsClickedFlight('collapsed');
  };

  const handleClickNavFlight = () => {
    setIsClickedPlan('collapsed');
    setIsClickedLanding('collapsed');
    setIsClickedCity('collapsed');
    setIsClickedTrans('collapsed');
    setIsClickedFlight('');
  };

  const handleClickNavCity = () => {
    setIsClickedPlan('collapsed');
    setIsClickedLanding('collapsed');
    setIsClickedCity('');
    setIsClickedTrans('collapsed');
    setIsClickedFlight('collapsed');
  };

  const handleClickNavTrans = () => {
    setIsClickedPlan('collapsed');
    setIsClickedLanding('collapsed');
    setIsClickedCity('collapsed');
    setIsClickedTrans('');
    setIsClickedFlight('collapsed');
  };

  const handleMouseOverPlan = () => {
    setIsHoveringPlan(true);
    setNavPlan('Planning');
  };

  const handleMouseOutPlan = () => {
    setIsHoveringPlan(false);
    setNavPlan(<i class='fa-solid fa-pencil'></i>);
  };

  const handleMouseOverFlight = () => {
    setIsHoveringFlight(true);
    setNavFlight('Vuelos');
  };

  const handleMouseOutFlight = () => {
    setIsHoveringFlight(false);
    setNavFlight(<i class='fa-solid fa-plane-departure'></i>);
  };

  const handleMouseOverCity = () => {
    setIsHoveringCity(true);
    setNavCity('Ciudades');
  };

  const handleMouseOutCity = () => {
    setIsHoveringCity(false);
    setNavCity(<i class='fa-solid fa-city'></i>);
  };

  const handleMouseOverTrans = () => {
    setIsHoveringTrans(true);
    setNavTrans('Transporte');
  };

  const handleMouseOutTrans = () => {
    setIsHoveringTrans(false);
    setNavTrans(<i class='fa-solid fa-train-subway'></i>);
  };

  return (
    <div className='body'>
      <header className='header'></header>
      <main className='main'>
        {/*NAVIGATION MENU*/}
        <nav className='main_nav'>
          <ul className='main_nav_ul'>
            <li
              onMouseOver={handleMouseOverPlan}
              onMouseOut={handleMouseOutPlan}
              onClick={handleClickNavPlan}
              className='main_nav_ul_plan'
            >
              {navPlan}
              {isHoveringPlan}
            </li>
            <li
              onMouseOver={handleMouseOverFlight}
              onMouseOut={handleMouseOutFlight}
              onClick={handleClickNavFlight}
              className='main_nav_ul_flight'
            >
              {navFlight}
              {isHoveringFlight}
            </li>
            <li
              onMouseOver={handleMouseOverCity}
              onMouseOut={handleMouseOutCity}
              onClick={handleClickNavCity}
              className='main_nav_ul_cities'
            >
              {navCity}
              {isHoveringCity}
            </li>
            <li
              onMouseOver={handleMouseOverTrans}
              onMouseOut={handleMouseOutTrans}
              onClick={handleClickNavTrans}
              className='main_nav_ul_transport'
            >
              {navTrans}
              {isHoveringTrans}
            </li>
          </ul>
        </nav>
        <div className='main_body'>
          {/*PAGE - LANDING*/}
          <div className={isClickedLanding}>
            <section className='landing'>
              <div className='landing_cont'>
                <div className='landing_cont-img'></div>
                <h1>
                  Bienvenidos a la web para gestionar el viaje a Japón 2024
                </h1>
              </div>
              <h3>
                <i class='fa-solid fa-triangle-exclamation'></i> Web en
                construcción! <i class='fa-solid fa-triangle-exclamation'></i>
              </h3>
              <ul>
                <li>
                  Web interactiva para organizar el viaje a Japón planeado para
                  marzo-abril 2024.
                </li>
                <li>
                  Las secciones son flexibles, y cualquier parte de la página se
                  podrá cambiar tras debate y consenso de grupo.
                </li>
                <li>
                  Cualquier miembro del grupo puede proponer y añadir
                  información en todas las secciones, para ir llenando la web de
                  contenido, información y decisiones del grupo.
                </li>
              </ul>
            </section>
          </div>

          {/*PAGE - PLANNING*/}
          <div className={isClickedPlan}>
            <section className='planning'>
              <h1 className='planning_title'>Planning</h1>
              <div className='planning_main'>
                <article className='planning_main-list'>
                  <ul>
                    <li>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt, doloremque molestiae, ab accusamus
                        similique commodi odio ullam libero reprehenderit
                        doloribus eligendi perspiciatis dolor cumque aperiam
                        deleniti? Temporibus facere quis sapiente!
                      </p>
                      <div className='list_assign'>
                        <p>Asignado a / quien lo tiene:</p>
                        <form className='list_assign-radio'>
                          <label for='assignoption1'>
                            <input
                              id='assignoption1'
                              type='checkbox'
                              value='assign1'
                              name='assign1'
                            />
                            Yuliana
                          </label>
                          <label for='assignoption2'>
                            <input
                              id='assignoption2'
                              type='checkbox'
                              value='assign2'
                              name='assign2'
                            />
                            Marcos
                          </label>
                          <label for='assignoption3'>
                            <input
                              id='assignoption3'
                              type='checkbox'
                              value='assign3'
                              name='assign3'
                            />
                            Luis
                          </label>
                          <label for='assignoption4'>
                            <input
                              id='assignoption4'
                              type='checkbox'
                              value='assign4'
                              name='assign4'
                            />
                            Raquel
                          </label>
                          <label for='assignoption5'>
                            <input
                              id='assignoption5'
                              type='checkbox'
                              value='assign5'
                              name='assign5'
                            />
                            Álvaro
                          </label>
                        </form>
                      </div>
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, doloremque molestiae, ab accusamus similique
                      commodi odio ullam libero reprehenderit doloribus eligendi
                      perspiciatis dolor cumque aperiam deleniti?
                      <div className='list_assign'>
                        <p>Asignado a / quien lo tiene:</p>
                        <form className='list_assign-radio'>
                          <label for='assignoption1'>
                            <input
                              id='assignoption1'
                              type='checkbox'
                              value='assign1'
                              name='assign1'
                            />
                            Yuliana
                          </label>
                          <label for='assignoption2'>
                            <input
                              id='assignoption2'
                              type='checkbox'
                              value='assign2'
                              name='assign2'
                            />
                            Marcos
                          </label>
                          <label for='assignoption3'>
                            <input
                              id='assignoption3'
                              type='checkbox'
                              value='assign3'
                              name='assign3'
                            />
                            Luis
                          </label>
                          <label for='assignoption4'>
                            <input
                              id='assignoption4'
                              type='checkbox'
                              value='assign4'
                              name='assign4'
                            />
                            Raquel
                          </label>
                          <label for='assignoption5'>
                            <input
                              id='assignoption5'
                              type='checkbox'
                              value='assign5'
                              name='assign5'
                            />
                            Álvaro
                          </label>
                        </form>
                      </div>
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, doloremque molestiae, ab accusamus similique
                      commodi odio ullam libero.
                      <div className='list_assign'>
                        <p>Asignado a / quien lo tiene:</p>
                        <form className='list_assign-radio'>
                          <label for='assignoption1'>
                            <input
                              id='assignoption1'
                              type='checkbox'
                              value='assign1'
                              name='assign1'
                            />
                            Yuliana
                          </label>
                          <label for='assignoption2'>
                            <input
                              id='assignoption2'
                              type='checkbox'
                              value='assign2'
                              name='assign2'
                            />
                            Marcos
                          </label>
                          <label for='assignoption3'>
                            <input
                              id='assignoption3'
                              type='checkbox'
                              value='assign3'
                              name='assign3'
                            />
                            Luis
                          </label>
                          <label for='assignoption4'>
                            <input
                              id='assignoption4'
                              type='checkbox'
                              value='assign4'
                              name='assign4'
                            />
                            Raquel
                          </label>
                          <label for='assignoption5'>
                            <input
                              id='assignoption5'
                              type='checkbox'
                              value='assign5'
                              name='assign5'
                            />
                            Álvaro
                          </label>
                        </form>
                      </div>
                    </li>
                  </ul>
                </article>
                <form className='planning_main-form'>
                  <h3>Formulario</h3>
                  <textarea
                    placeholder='Usa esta sección para añadir elementos a la sección de planning'
                    id='planning'
                    type='text'
                    name='planning'
                    className='planning_main-form-input'
                  />
                </form>
              </div>
            </section>
          </div>

          {/*PAGE - FLIGHTS*/}
          <div className={isClickedFlight}>
            <section className='flights'>
              <h1 className='flights_title'>Vuelos</h1>
              <p className='flights_desc'>
                En esta sección compartiremos información sobre vuelos
                disponibles para el viaje.
              </p>
              <button className='flights_btn'>
                Entrar en la sección de vuelos!
              </button>
              <p className='flights_desc'>
                Puedes usar este buscador de Skyscanner para ver opciones de
                vuelos:
              </p>
              <div
                className='skyscanner'
                data-skyscanner-widget='FlightSearchWidget'
                data-locale='es-ES'
                data-market='ES'
                data-currency='EUR'
                data-destination-name='tokyo'
                data-origin-name='madrid'
                data-responsive='true'
                data-flight-outbound-date='2024-03-23'
                data-flight-inbound-date='2024-04-07'
              ></div>
              <p className='flights_desc'>
                Recordad! Las fechas del viaje son la última semana de marzo y
                la primera semana de abril.
              </p>
              <img className='calendar-img' src={calendar} alt='calendar' />
            </section>
          </div>

          {/*PAGE - CITIES*/}
          <div className={isClickedCity}>
            <section className='cities'>
              <ul className='cities_banner'>
                <li className='cities_banner_tokyo'>Tokyo</li>
                <li className='cities_banner_osaka'>Osaka</li>
                <li className='cities_banner_kyoto'>Kyoto</li>
                <li className='cities_banner_nara'>Nara</li>
              </ul>
            </section>
          </div>

          {/*PAGE - TRANSPORT*/}
          <div className={isClickedTrans}>
            <section className='transport'>
              <h1 className='transport_title'>Transporte</h1>
              <ul className='transport_desc'>
                <li>
                  Vamos a usar esta sección para organizar los viajes entre
                  ciudades.
                </li>
                <li>
                  La idea es ir poniendo opciones de tren, duraciones de 
                  los trayectos, precios y links a webs de transportes para
                  ir teniendo una idea sobre los trayectos, saber qué nos podemos
                  esperar en cuanto a tiempos y horarios, cómo comprar billetes,
                  y no vernos sin idea cuando toque viajar dentro de Japón.
                </li>
              </ul>
              <ul className='transport_banner'>
                <li className='transport_banner-tokyo'>Tokyo ⇆ Osaka</li>
                <li className='transport_banner-osaka'>Osaka ⇆ Kyoto</li>
                <li className='transport_banner-kyoto'>Kyoto ⇆ Nara</li>
                <li className='transport_banner-nara'>Nara ⇆ Osaka</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <footer className='footer'></footer>
    </div>
  );
};

export default App;
