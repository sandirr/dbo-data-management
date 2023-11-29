'use client'

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const features = [
    {
      name: 'Customer',
      path: '/customer',
      img: '/assets/customer.jpeg'
    },
    {
      name: 'Order',
      path: '/order',
      img: '/assets/order.png'
    },
    {
      name: 'Supplier',
      path: '/supplier',
      img: '/assets/supplier.png'
    },
    {
      name: 'Authentication',
      path: '/authentication',
      img: '/assets/auth.jpeg'
    },
  ]

export default function Features(){
    return(
        <Container>
            <Row>
                {features.map(feature=>(
                    <Col lg={3} md={6} key={feature.name}>
                        <Card className="mb-3" border="primary">
                            <Card.Img variant="top" src={feature.img} />
                            <Card.Header>Management</Card.Header>
                            <Card.Body>
                                <Card.Title>{feature.name}</Card.Title>
                                <Button as='a' href={feature.path} variant="outline-primary" size="sm">Go to Manage</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}