import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { LoadLikedItems } from "./LoadLikedItems";
import axios from "axios";

function CreateExhib({ likedItems, userID, onExhibitionCreated }) {
  const { reloadLikedItems } = LoadLikedItems();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exhibName, setExhibName] = useState("testExhib");
  const [isPublic, setIsPublic] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (likedItems.length > 0 && likedItems[0].ImageUrl) {
      setImageUrl(likedItems[0].ImageUrl);
    }
  }, [likedItems]);


  const handleSaveExhibition = async () => {
    let requestPayload = {
      userID: userID,
      exhibName: exhibName,
      exhibImage: imageUrl,
      exhibPublic: isPublic.toString(),
      exhibItems: likedItems,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      await axios.post("https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/createExhibit", requestPayload, config);
      localStorage.setItem('likedItems', JSON.stringify([]));
      reloadLikedItems();
      setIsModalOpen(false);
      
      // Call the callback to trigger refresh
      if (onExhibitionCreated) {
        onExhibitionCreated();
      }
    } catch (error) {
      console.error("Error creating exhibition:", error);
    }
  };

  return (
    <>
      <Button variant="primary" style={{ border: "#F7E7DC" }} onClick={() => setIsModalOpen(true)}>
        Save Exhibition
      </Button>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Exhibition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exhibName">
              <Form.Label><strong>Exhibition Name</strong></Form.Label>
              <Form.Control
                type="text"
                value={exhibName}
                onChange={(e) => setExhibName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isPublic">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Public"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
            </Form.Group>
          </Form>
          <div className="mt-4">
            <p>
              <strong>Items in exhibition:</strong> {likedItems.length}
            </p>
            {imageUrl && (
              <div>
                <p>
                  <strong>Exhibition Cover Image:</strong>
                </p>
                <Image
                  src={imageUrl}
                  alt="Featured Item"
                  thumbnail
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                  onError={(e) => {
                    console.error("Error loading image:", e);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveExhibition}
            disabled={likedItems.length === 0}
          >
            Save Exhibition
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateExhib;