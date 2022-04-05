export const Anchor = ({ id }) => (
  <div style={{ position: "relative" }}>
    <div
      id={id}
      style={{
        width: 0,
        height: 76,
        position: "absolute",
        top: -76,
      }}
    />
  </div>
);
