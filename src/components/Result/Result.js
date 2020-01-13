import React, { useContext, useEffect, useState } from 'react'
import { MediaContext } from '../../context/mediaContext'
import { EmployeeContext } from '../../context/employeeContext'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import Gauge from './Gauge'
import { Link } from 'react-router-dom'
import './result.css'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'
import SurveyButton from '../Button/SurveyButton'

const data = [
  {
    subject: 'kinetic',
    score: Math.random() * 100
  },
  {
    subject: 'productivity',
    score: Math.random() * 100
  },
  {
    subject: 'visual',
    score: Math.random() * 100
  },
  {
    subject: 'optimism',
    score: Math.random() * 100
  },
  {
    subject: 'social',
    score: Math.random() * 100
  }
]

const StyledHeader = styled.h1`
  color: #283593;
  font-size: 2em;
  line-height: 0;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  margin: 20px auto;
  border: solid 3px #283593;
  border-radius: 10px;
  padding: 5vh 5vh;
  background-color: whitesmoke;
`

const FallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 95vw;
  min-height: 80vh;
`

const RadarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 95%;
`

const Result = () => {
  const { media } = useContext(MediaContext)
  const { user } = useContext(EmployeeContext)
  const [result, setResult] = useState([])
  const [width, setWidth] = useState(window.innerWidth)
  const [TotalScore, setTotalScore] = useState()
  const resize = () => {
    setWidth(window.innerWidth)
  }

  const GenerateResult = () => {
    if (result.length > 0) {
      return result.map(data => {
        return (
          <div>
            <h1>{data.score}</h1>
            <h3>{data.subject}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              magni aliquid doloribus, sed fuga expedita maiores natus commodi
              voluptatum laborum corrupti culpa id in eveniet quia distinctio
              recusandae quaerat tenetur?
            </p>
          </div>
        )
      })
    }
  }

  useEffect(() => {
    if (user) {
      if (result.length > 0) {
        const cal =
          result.reduce((total, data) => {
            return total + data.score
          }, result.length * 2) / result.length
        setTotalScore(cal)
      } else {
        setTotalScore(0)
      }
    }
  }, [result, user])

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/employee/result', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      }).then(resp => resp.json())
      resp.score
        ? setResult([
            { subject: 'kinetic', score: resp.score.kinetic },
            { subject: 'productivity', score: resp.score.productivity },
            { subject: 'visual', score: resp.score.visual },
            { subject: 'optimism', score: resp.score.optimism },
            { subject: 'social', score: resp.score.social }
          ])
        : setResult(undefined)
    }
    fetchData()
  }, [])

  if (user.email) {
    if (result.length > 0) {
      return (
        <>
          <Wrapper media={media}>
            <StyledHeader>Profile Overview</StyledHeader>
            <Gauge totalScore={TotalScore}></Gauge>
            <RadarWrapper>
              <RadarChart
                cx="50%"
                cy="50%"
                innerRadius="30%"
                outerRadius="70%"
                width={0.5 * width}
                height={300 + 0.1 * width}
                data={result.length > 0 ? result : data} //hack to prevent error and dispay dummy for now
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="result"
                  dataKey="score"
                  stroke="#c9d1ff"
                  fill="#283593"
                  fillOpacity={0.75}
                />
              </RadarChart>
            </RadarWrapper>
            <div class="grid">{GenerateResult()}</div>
          </Wrapper>
        </>
      )
    } else {
      return (
        <>
          <FallbackWrapper>
            <Wrapper>
              <StyledHeader>You haven't done the survey</StyledHeader>
              <Link
                to="/survey"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <SurveyButton></SurveyButton>
              </Link>
            </Wrapper>
          </FallbackWrapper>
        </>
      )
    }
  } else {
    return <Redirect to="/" />
  }
}

export default Result
