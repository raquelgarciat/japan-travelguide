import '../styles/App.scss';
import { useState } from 'react';
import calendar from '../images/calendar.png';

const App = () => {
  const [isHoveringPlan, setIsHoveringPlan] = useState(false);
  const [isHoveringFlight, setIsHoveringFlight] = useState(false);
  const [isHoveringCity, setIsHoveringCity] = useState(false);
  const [isHoveringTrans, setIsHoveringTrans] = useState(false);

  const handleMouseOverPlan = () => {
    setIsHoveringPlan(true);
  };

  const handleMouseOutPlan = () => {
    setIsHoveringPlan(false);
  };

  const handleMouseOverFlight = () => {
    setIsHoveringFlight(true);
  };

  const handleMouseOutFlight = () => {
    setIsHoveringFlight(false);
  };

  const handleMouseOverCity = () => {
    setIsHoveringCity(true);
  };

  const handleMouseOutCity = () => {
    setIsHoveringCity(false);
  };

  const handleMouseOverTrans = () => {
    setIsHoveringTrans(true);
  };

  const handleMouseOutTrans = () => {
    setIsHoveringTrans(false);
  };

  return (
    <div className='body'>
      <header className='header'></header>
      <main className='main'>
        <nav className='main_nav'>
          <ul className='main_nav_ul'>
            <li
              onMouseOver={handleMouseOverPlan}
              onMouseOut={handleMouseOutPlan}
              className='main_nav_ul_plan'
            >
              <i class='fa-solid fa-pencil'></i>
              {isHoveringPlan && <p>Planning</p>}
            </li>
            <li
              onMouseOver={handleMouseOverFlight}
              onMouseOut={handleMouseOutFlight}
              className='main_nav_ul_flight'
            >
              <i class='fa-solid fa-plane-departure'></i>
              {isHoveringFlight && <p>Vuelos</p>}
            </li>
            <li
              onMouseOver={handleMouseOverCity}
              onMouseOut={handleMouseOutCity}
              className='main_nav_ul_cities'
            >
              <i class='fa-solid fa-city'></i>
              {isHoveringCity && <p>Ciudades</p>}
            </li>
            <li
              onMouseOver={handleMouseOverTrans}
              onMouseOut={handleMouseOutTrans}
              className='main_nav_ul_transport'
            >
              <i class='fa-solid fa-train-subway'></i>
              {isHoveringTrans && <p>Transporte</p>}
            </li>
          </ul>
        </nav>
        <div className='main_body'>
          <section className='landing'>
            
            <div className="landing_cont">
              <div className="landing_cont-img"></div>
              <h1>Bienvenidos a la web para gestionar el viaje a Japón 2024</h1>
            </div>
            <h3>--- Web en construcción!</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus at cupiditate ad quos assumenda consectetur eum animi.
              Placeat dolores, ipsa inventore, architecto dignissimos cumque
              ullam aut consectetur sint quasi quo?
            </p>
          </section>
          <section className='planning collapsed'>
            <h1 className='planning_title'>Planning</h1>
            <div className='planning_main'>
              <article className='planning_main-list'>
                <ul>
                  <li>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, doloremque molestiae, ab accusamus similique
                      commodi odio ullam libero reprehenderit doloribus eligendi
                      perspiciatis dolor cumque aperiam deleniti? Temporibus
                      facere quis sapiente!
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

          <section className='flights collapsed'>
            <h1 className='flights_title'>Vuelos</h1>
            <p className='flights_desc'>
              En esta sección compartiremos información sobre vuelos disponibles
              para el viaje.
            </p>
            <button className='flights_btn'>Entrar en la sección de vuelos!</button>
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
              Recordad! Las fechas del viaje son la última semana de marzo y la
              primera semana de abril.
            </p>
            <img className='calendar-img' src={calendar} alt='calendar' />
          </section>

          <section className='cities collapsed'>
            <div className="cities_banner">
              <div className='cities_banner_tokyo'>Tokyo</div>
              <div className='cities_banner_osaka'>Osaka</div>
              <div className='cities_banner_kyoto'>Kyoto</div>
              <div className='cities_banner_nara'>Nara</div>
            </div>
          </section>
          <section className='transport collapsed'>
            <h1 className='transport_title'>Transporte</h1>
            <p className='transport_desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              magni provident minus commodi reprehenderit, autem odio minima
              aliquam unde natus quisquam ratione nulla eius. Nostrum
              consectetur minima totam velit! Accusamus.
            </p>
          </section>
        </div>
      </main>
      <footer className='footer'></footer>
    </div>
  );
};

export default App;
