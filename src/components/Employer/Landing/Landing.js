import React, { useContext } from 'react'
import styled from 'styled-components'
import { MediaContext } from '../../../context/mediaContext'
import { CreateOutlined, PersonOutline, MailOutline } from '@material-ui/icons'
import './Landing.css'

const LandingWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font-size: 1rem;
`

const DesktopLanding = () => {
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  return (
    <>
      <LandingWrapper data-testid="landing-wrapper">
        <section id="banner">
          <div class="inner">
            <h1>Magnify</h1>
            <p>
              The app that rates job candidates and show the salary they want
            </p>
          </div>
        </section>
        <section id="site-details">
          <h1>Magnify Logic</h1>
          <p>
            let your employee took the survey and we turn it to score that
            indicate ...
          </p>
          <div class="flex-wrapper">
            <div class="grid">
              <div>
                <CreateOutlined />
                <span>Create Vacancie</span>
                <div id="vacan" class="image"></div>
              </div>
              <div>
                <MailOutline />
                <span> Invite Employee to do the Survey</span>
                <div id="survey" class="image"></div>
              </div>
              <div>
                <PersonOutline />
                <span> Recruit Public</span>
                <div id="public" class="image"></div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div class="inner">
            <div class="content">
              <section>
                <h3>Maginify</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  in temporibus nulla error quidem distinctio enim, esse cumque
                  corrupti modi mollitia praesentium reprehenderit quaerat quis
                  debitis nam quo nihil. Doloribus.
                </p>
                <p> Address : 1/1 aa Melbourne 3000</p>
              </section>
              <section>
                <h4>Navigate</h4>
                <ul class="alt">
                  <li>
                    <a href="#">Vacancies</a>
                  </li>
                  <li>
                    <a href="#">Invite</a>
                  </li>
                  <li>
                    <a href="#">Public</a>
                  </li>
                  <li>
                    <a href="#">Email us</a>
                  </li>
                </ul>
              </section>
              <section>
                <h4>Social</h4>
                <ul class="plain">
                  <li>
                    <a href="#">
                      <i class="icon fa-twitter">&nbsp;</i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon fa-facebook">&nbsp;</i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon fa-instagram">&nbsp;</i>Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon fa-github">&nbsp;</i>Github
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div class="end">--- Magnify Copyright --</div>
          </div>
        </footer>
      </LandingWrapper>
    </>
  )
}

export default DesktopLanding
