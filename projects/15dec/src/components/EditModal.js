import React, { useEffect, useState } from "react";
import { Modal, Header, Button, Icon, Form } from "semantic-ui-react";

const EditModal = ({ traineeName }) => {
    const[traineeEdit,setTraineeEdit]=useState({
        firstName:"",
        lastName:""
    })
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(traineeName);
    setTraineeEdit({
        ...traineeName
    })
  }, [traineeName]);

  return (
    <>
      <Modal
        closeIcon
        open={open}
        trigger={<Icon name="edit" size="middle" />}
        // trigger={<h1>Hello</h1>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {/* <Header icon="archive" content={` ${trainee.firstName} Data`} /> */}
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" value={traineeEdit.firstName}/>
              <Form.Input fluid label="Last name" placeholder="Last name" value={traineeEdit.lastName} />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={() => setOpen(false)}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};
export default EditModal;
