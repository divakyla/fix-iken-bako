import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./suggestion-t-o-u-m-a.module.css";
const SuggestionTOUMA: NextPage = () => {
  return (
    <Form.Group className={styles.suggestionToumaFormgroup}>
      <Form.Control as="textarea" placeholder="Textarea placeholder" />
    </Form.Group>
  );
};

export default SuggestionTOUMA;
