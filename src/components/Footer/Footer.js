import React, { useContext } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { EmployerContext } from '../../context/employerContext'

const Footer = styled.div`
  background-color: #111111;
  color: rgba(255, 255, 255, 0.5);
  padding: 8rem 0 6rem 0;
  margin: 0;
  padding: 50px;
  border: 0;
  font-size: 100%;
  font: inherit;
  display: flex;
  display: block;
  @media screen and (max-width: 1280px) {
    padding: 4rem 3rem 2rem 3rem;
  }
  @media screen and (max-width: 736px) {
    padding: 3rem 3rem 1rem 3rem;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 3rem 0.1rem 3rem;
  }
`
const FooterH3 = styled.h3`
  color: #ffffff;
`
const FooterH4 = styled.h4`
  color: #ffffff;
`
const FooterContent = styled.div`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  @media screen and (max-width: 980px) {
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`
const FooterContentSectionFirst = styled.div`
  width: 50%;
  padding-right: 4rem;
  @media screen and (max-width: 980px) {
    width: 100%;
    padding-right: 0;
  }
`
const FooterContentSection = styled.div`
  width: 25%;
  @media screen and (max-width: 980px) {
    width: 50%;
  }
  @media screen and (max-width: 736px) {
    width: 100%;
  }
`
const FooterContentSectionLast = styled.div`
  padding-left: 4rem;
  @media screen and (max-width: 736px) {
    padding-left: 0;
  }
`

const FooterEnd = styled.div`
  border-top: 1px solid;
  font-size: 0.9rem;
  opacity: 0.7;
  padding: 2rem 0;
  text-align: center;
  color: gray;
`

const useStyles = makeStyles(theme => ({
  footerLink: {
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
    '&:hover': {
      color: '#FFFFFF'
    }
  }
}))

const FooterComponent = () => {
  const classes = useStyles()
  const employerContext = useContext(EmployerContext)
  if (employerContext) {
    return (
      <Footer>
        <>
          <FooterContent>
            <FooterContentSectionFirst>
              <FooterH3>Maginify</FooterH3>
              <p>
                We pride ourselves in delivering a unique solution to the stigma
                of the hiring process. Through our application we deliver a
                psychological insight into a candidate's tendencies to enable
                you the employer to hire the best person for the job. Our
                algorithm is proven to accurately determine employable qualities
                of an applicant and create a base percentage from the candidates
                results, compared to scientifically proven ideal characteristics
                of a top employee.
              </p>
              <p> Address : 1/1 aa Melbourne 3000</p>
            </FooterContentSectionFirst>
            <FooterContentSection>
              <FooterH4>Navigate</FooterH4>
              <ul>
                <li>
                  <Link to="/vacancy" className={classes.footerLink}>
                    Vacancies
                  </Link>
                </li>
                <li>
                  <Link to="/delegates" className={classes.footerLink}>
                    Public
                  </Link>
                </li>
                <li>
                  <Link to="/" className={classes.footerLink}>
                    Email us
                  </Link>
                </li>
              </ul>
            </FooterContentSection>
            <FooterContentSectionLast>
              <FooterH4>Social</FooterH4>
              <ul className="plain">
                <li>
                  <a
                    href="https://twitter.com/?lang=en"
                    className={classes.footerLink}
                  >
                    <i className="icon fa-twitter">&nbsp;</i>Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className={classes.footerLink}
                  >
                    <i className="icon fa-facebook">&nbsp;</i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className={classes.footerLink}
                  >
                    <i className="icon fa-instagram">&nbsp;</i>Instagram
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" className={classes.footerLink}>
                    <i className="icon fa-github">&nbsp;</i>Github
                  </a>
                </li>
              </ul>
            </FooterContentSectionLast>
          </FooterContent>
          <FooterEnd>--- Magnify Copyright --</FooterEnd>
        </>
      </Footer>
    )
  } else {
    return (
      <Footer>
        <>
          <FooterContent>
            <FooterContentSectionFirst>
              <FooterH3>Magnify</FooterH3>
              <p>
                We pride ourselves in delivering a unique solution to the stigma
                of the hiring process. Through our application we deliver a
                psychological insight into a candidate's tendencies to enable
                you the employer to hire the best person for the job. Our
                algorithm is proven to accurately determine employable qualities
                of an applicant and create a base percentage from the candidates
                results, compared to scientifically proven ideal characteristics
                of a top employee.
              </p>
              <p> Address : 1/1 aa Melbourne 3000</p>
            </FooterContentSectionFirst>
            <FooterContentSection>
              <FooterH4>Navigate</FooterH4>
              <ul>
                <li>
                  <Link to="/survey" className={classes.footerLink}>
                    Survey
                  </Link>
                </li>
                <li>
                  <Link to="/result" className={classes.footerLink}>
                    Results
                  </Link>
                </li>
                <li>
                  <Link to="/vacancies" className={classes.footerLink}>
                    Vacancies
                  </Link>
                </li>
                <li>
                  <Link to="/landing" className={classes.footerLink}>
                    Email us
                  </Link>
                </li>
              </ul>
            </FooterContentSection>
            <FooterContentSectionLast>
              <FooterH4>Social</FooterH4>
              <ul className="plain">
                <li>
                  <a
                    href="https://twitter.com/?lang=en"
                    className={classes.footerLink}
                  >
                    <i className="icon fa-twitter">&nbsp;</i>Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className={classes.footerLink}
                  >
                    <i className="icon fa-facebook">&nbsp;</i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className={classes.footerLink}
                  >
                    <i className="icon fa-instagram">&nbsp;</i>Instagram
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" className={classes.footerLink}>
                    <i className="icon fa-github">&nbsp;</i>Github
                  </a>
                </li>
              </ul>
            </FooterContentSectionLast>
          </FooterContent>
          <FooterEnd>--- Magnify Copyright --</FooterEnd>
        </>
      </Footer>
    )
  }
}

export default FooterComponent
