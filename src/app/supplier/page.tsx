// View
'use client'

import { Button, Card, Container, Form, ListGroup, Modal, Stack, Table } from "react-bootstrap";
import useController, { IDataItem } from "./supplierController";
import CustomPagination from "@/components/CustomPagination";

export default function SupplierView(){
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
                <h3 className="mt-3">Supplier</h3>
                <Button variant="primary" className="ms-auto" onClick={openModalCreate}>Create new supplier</Button>
            </Stack>
            <Table striped bordered hover responsive className="mt-3 flex-wrap">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: IDataItem, idx)=>(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
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
                <Modal.Title>{selectedItem?.hasOwnProperty('id') ? 'Update' : 'New'} Supplier</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        id="name"
                        value={selectedItem?.name}
                    />
                    
                    <Form.Label htmlFor="email" className="mt-4">Email</Form.Label>
                    <Form.Control
                        id="email"
                        value={selectedItem?.email}
                    />
                    
                    <Form.Label htmlFor="phone" className="mt-4">Phone</Form.Label>
                    <Form.Control
                        id="phone"
                        value={selectedItem?.phone}
                    />
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
                <Modal.Title>Supplier Details</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>{selectedItem?.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>ID: #{selectedItem?.id}</ListGroup.Item>
                            <ListGroup.Item>Email: {selectedItem?.email}</ListGroup.Item>
                            <ListGroup.Item>Phone: {selectedItem?.phone}</ListGroup.Item>
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
                <Modal.Title>Delete Supplier</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>#{selectedItem?.id} {selectedItem?.name}</Card.Title>
                            <Card.Text>Are you sure want to delete this supplier? You can&apos;t undo deleted data</Card.Text>
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