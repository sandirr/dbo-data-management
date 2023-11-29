// View
'use client'

import { Button, Card, Container, Form, ListGroup, Modal, Stack, Table } from "react-bootstrap";
import useController, { IDataItem } from "./orderController";
import customers from '@/data/customerData.json'
import CustomPagination from "@/components/CustomPagination";

export default function OrderView(){
    const {
        data,
        paginationSchema,
        selectedItem,
        openModal,
        saveData,
        openModalCreate,
        openModalUpdate,
        closeModal,
        openDetail,
        openModalDetail,
        closeModalDetail,
        openDelete,
        openModalDelete,
        closeModalDelete,
        deleteData
    } = useController()
    return(
        <Container>
            <Stack direction="horizontal">
                <h3 className="mt-3">Order</h3>
                <Button variant="primary" className="ms-auto" onClick={openModalCreate}>Create new order</Button>
            </Stack>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: IDataItem, idx)=>(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.customerId}</td>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td className="text-center">
                                <Stack direction="horizontal" className="justify-content-center">
                                    <Button variant="outline-info" size='sm' onClick={()=> openModalDetail(item)}>Detail</Button>
                                    <Button variant="outline-warning" size='sm' className="mx-2" onClick={()=>openModalUpdate(item)}>Update</Button>
                                    <Button variant="outline-danger" size='sm' onClick={()=>openModalDelete(item)}>Delete</Button>
                                </Stack>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="my-3">
                <CustomPagination {...paginationSchema} />
            </div>

            {/* Modal Create/Update Data */}
            <Modal show={openModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                <Modal.Title>{selectedItem?.hasOwnProperty('id') ? 'Update' : 'New'} Order</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="name">Product Name</Form.Label>
                    <Form.Control
                        id="name"
                        value={selectedItem?.product}
                    />
                    
                    <Form.Label htmlFor="qty" className="mt-4">Qty</Form.Label>
                    <Form.Control
                        id="qty"
                        type="number"
                        value={selectedItem?.quantity}
                    />
                    
                    <Form.Label htmlFor="customer" className="mt-4">Customer</Form.Label>
                    <Form.Select aria-label="Default select example" id="customer" value={selectedItem?.customerId}>
                        <option>Choose customer</option>
                        {customers.map(customer=>(
                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                        ))}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveData}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
           
            {/* Modal Details */}
            <Modal show={openDetail} onHide={closeModalDetail} centered>
                <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>{selectedItem?.product}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>ID: #{selectedItem?.id}</ListGroup.Item>
                            <ListGroup.Item>Customer ID: {selectedItem?.customerId}</ListGroup.Item>
                            <ListGroup.Item>Quantity: {selectedItem?.quantity}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModalDetail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
            {/* Modal Delete Data */}
            <Modal show={openDelete} onHide={closeModalDelete} centered>
                <Modal.Header closeButton>
                <Modal.Title>Delete Order</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>#{selectedItem?.id} {selectedItem?.product}</Card.Title>
                            <Card.Text>Buyer/Customer ID: {selectedItem?.customerId}</Card.Text>
                            <Card.Text>Are you sure want to delete this order? You can&apos;t undo deleted data</Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModalDelete}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteData}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}