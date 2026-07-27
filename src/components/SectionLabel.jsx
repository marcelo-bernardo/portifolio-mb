export default function SectionLabel({ index, title }) {
  return (
    <div className="section-head">
      <span className="section-head__index">{index}</span>
      <h2 className="section-head__title">{title}</h2>
      <span className="section-head__rule" />
    </div>
  );
}
