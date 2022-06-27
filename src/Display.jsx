import React from 'react'
import { Col } from 'react-bootstrap'



export default function Display({display, answer}) {
  return (
    <>
     <Col xs={12}id="display" className=" text-warning py-0 my-0">{display}</Col>
     <Col id="answer" className=" text-light py-0 my-0">{answer} </Col>
    </>
  )
}
