export default function Section({ title, children }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        {children}
      </div>
    </div>
  );
}
