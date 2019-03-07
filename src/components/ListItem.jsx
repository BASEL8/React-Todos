import React from "react";

const ListItemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #484747",
  marginBottom: 20
};
const ListItemLabelStyle = {
  flexGrow: 1,
  textAlign: "left",
  paddingLeft: 5
};
const ListItemInputStyle = {
  display: "none"
};
const ListItemButtonStyle = {
  background: "none",
  border: "1px solid #868585",
  padding: "5px 10px",
  borderRadius: 4,
  color: "#868585"
};

function ListItem(props) {
  return (
    <div style={ListItemStyle}>
      <label style={ListItemLabelStyle}>
        <h5
          style={
            props.data.done === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {props.data.content}
        </h5>
        <input
          type="checkbox"
          onChange={() => props.onTodoToDone(props.data.id, props.parentId)}
          checked={props.data.done}
          style={ListItemInputStyle}
        />
      </label>
      <button
        style={ListItemButtonStyle}
        onClick={() => props.onDelete(props.parentId, props.data.id)}
      >
        {props.data.deleted ? "reuse" : "delete"}
      </button>
    </div>
  );
}
export default ListItem;
