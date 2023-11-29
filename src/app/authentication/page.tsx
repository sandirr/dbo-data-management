// View
'use client'

import { Button, Card, Container, Form, ListGroup, Modal, Stack, Table } from "react-bootstrap";
import useController, { IDataItem } from "./authController";
import CustomPagination from "@/components/CustomPagination";

export default function AuthenticationView(){
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
                <h3 className="mt-3">Authentication</h3>
                <Button variant="primary" className="ms-auto" onClick={openModalCreate}>Create new auth data</Button>
            </Stack>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: IDataItem, idx)=>(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.role}</td>
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
                <Modal.Title>{selectedItem?.hasOwnProperty('id') ? 'Update' : 'New'} Auth Data</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        id="username"
                        value={selectedItem?.username}
                    />
                    
                    <Form.Label htmlFor="role" className="mt-4">Role</Form.Label>
                    <Form.Control
                        id="role"
                        value={selectedItem?.role}
                    />
                    
                    <Form.Label htmlFor="password" className="mt-4">Password</Form.Label>
                    <Form.Control
                        id="password"
                        value={selectedItem?.password}
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
                <Modal.Title>Auth Data Details</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>{selectedItem?.username}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>ID: #{selectedItem?.id}</ListGroup.Item>
                            <ListGroup.Item>Role: {selectedItem?.role}</ListGroup.Item>
                            <ListGroup.Item>Password: {selectedItem?.password}</ListGroup.Item>
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
                <Modal.Title>Delete Auth Data</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>#{selectedItem?.id} {selectedItem?.username}</Card.Title>
                            <Card.Text>Are you sure want to delete this auth data? You can&apos;t undo deleted data</Card.Text>
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