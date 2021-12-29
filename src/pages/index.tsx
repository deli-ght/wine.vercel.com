import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return <Main></Main>
}

export default Home

const wave = keyframes`
  from {
    transform : translateY(200px) rotate(0);
  }
  50% {
    transform : translateY(-100px) rotate(360deg);
  }
  to {
    transform : translateY(200px) rotate(0);
  }
`

const Main = styled.main`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 50vh;
  &:hover {
    cursor: pointer;
  }
  &:hover::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
    height: 100vw;
    border-radius: 40%;
    background: ;
    animation: ${wave} 10s infinite;
    z-index: -1;
  }
  &:hover::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
    height: 120vw;
    border-radius: 40%;
    background: rgba(242, 176, 94, 0.8);
    animation: ${wave} 10s infinite;
    z-index: -1;
  }
`
