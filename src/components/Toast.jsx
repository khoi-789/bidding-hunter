export default function Toast({ msg, type }) {
  return (
    <div className={`toast ${type}`}>
      <span>{msg}</span>
    </div>
  );
}
