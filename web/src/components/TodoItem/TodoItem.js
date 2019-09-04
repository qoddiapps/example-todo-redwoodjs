import styled from "styled-components";

import Check from "src/components/Check";

const TodoItem = ({ id, body, status, updateTodo }) => {
  const onUpdate = () => {
    const newStatus = status === "off" ? "on" : "off";
    updateTodo({
      variables: { id, status: newStatus },
      optimisticResponse: {
        __typename: "Mutation",
        updateTodo: { __typename: "Todo", id, body, status: "loading" }
      }
    });
  };

  return (
    <SC.Item>
      <SC.Target onClick={onUpdate}>
        <Check type={status} />
      </SC.Target>
      <SC.Body>{status === "on" ? <s>{body}</s> : body}</SC.Body>
    </SC.Item>
  );
};

const SC = {};
SC.Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;
SC.Target = styled.div`
  cursor: pointer;
`;
SC.Body = styled.div`
  list-style: none;
  font-size: 18px;
  border-top: 1px solid #efefef;
  padding: 10px 0;
  width: 100%;
`;

export default TodoItem;