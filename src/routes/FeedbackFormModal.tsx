import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { useModal } from "../components/Modal/hooks";

export const FeedbackformModal = () => {
  const { isShown, toggle } = useModal();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = () => {
    console.log(email, name);
    toggle();
  };

  const content = (
    <>
      <Input
        name={"name"}
        placeholder={"name"}
        label={"Name *"}
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></Input>
      <Input
        name={"email"}
        placeholder={"email"}
        label={"Email *"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></Input>
      <Input
        name={"feedback"}
        placeholder={""}
        label={"where did you hear about us?"}
        onChange={(e) => setFeedback(e.target.value)}
        value={feedback}
      ></Input>
    </>
  );

  const modalFooter = (
    <Button variant='grey' onClick={() => handleSubmit}>
      Confirm booking
    </Button>
  );
  return (
    <>
      {" "}
      <Button variant='blue' hasShadow onClick={toggle}>
        Book a demo today!
      </Button>
      <Modal
        headerText='Confirm meeting'
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        modalFooterContent={modalFooter}
      />
    </>
  );
};
