import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Container, Row, Col, Modal, Card } from 'react-bootstrap';
import InventoryService from '../services/InventoryService';

const customTableClass = "custom-table";

function GetAllComponent() {
  const [originalInventoryItems, setOriginalInventoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inventoryItems, setInventoryItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setInventoryItems(originalInventoryItems);
      setSearchError(null);
    } else {
      searchInventoryByName();
    }
  }, [searchTerm, originalInventoryItems]);

  const fetchInventoryItems = async () => {
    try {
      const response = await InventoryService.getItem();
      setOriginalInventoryItems(response.data);
      setInventoryItems(response.data);
    } catch (error) {
      console.error('Error fetching inventory items:', error);
    }
  };

  const handleView = (itemId) => {
    console.log('Viewing item with ID:', itemId);
    navigate(`/view-inventory/${itemId}`);
  };

  const handleUpdate = (itemId) => {
    console.log('Updating item with ID:', itemId);
    navigate(`/update-item/${itemId}`);
  };

  const handleDeleteConfirmation = (itemId) => {
    setDeleteItemId(itemId);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    try {
      await InventoryService.deleteItem(deleteItemId);

      setInventoryItems((prevItems) =>
        prevItems.filter((item) => item.id !== deleteItemId)
      );

      setDeleteItemId(null);
      setShowConfirmModal(false);
      setShowModal(true);
      console.log(`Delete item with ID: ${deleteItemId}`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
    setDeleteItemId(null);
  };

  return (
    <Container className="vh-100 d-flex flex-column mb-5">
      <Row className="justify-content-between align-items-center mb-5 mt-5">
        <Col>
          <h2>Stock Yang Tersedia</h2>
        </Col>
        <Col xs="auto">
          <Link to="/create-inventory">
            <Button variant="success" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
              Tambah Barang
            </Button>
          </Link>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          {searchError && <p className="text-danger">{searchError}</p>}
          {Array.isArray(inventoryItems) && inventoryItems.length > 0 ? (
            <Table bordered striped responsive="md" className={`${customTableClass} table-hover`}>
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Nama Barang</th>
                  <th>Jumlah</th>
                  <th>Harga Satuan</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nama_barang}</td>
                    <td>{item.jumlah}</td>
                    <td>{item.harga_satuan}</td>
                    <td className="d-flex justify-content-center">
                      <Button
                        variant="info"
                        className="me-2"
                        style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: '#ffffff' }}
                        onClick={() => handleView(item.id)}
                      >
                        Detail
                      </Button>
                      <Button
                        variant="warning"
                        className="me-2"
                        style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: '#ffffff' }}
                        onClick={() => handleUpdate(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteConfirmation(item.id)}
                        style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No items available.</p>
          )}
        </Card.Body>
      </Card>
      <Modal show={showConfirmModal} onHide={handleCloseConfirmModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This will delete this post permanently. you cannot undo this action.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseConfirmModal}
            style={{ backgroundColor: '#ffffff', borderColor: '#dc3545', color: '#dc3545' }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item Removed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Item has been successfully Removed.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default GetAllComponent;
