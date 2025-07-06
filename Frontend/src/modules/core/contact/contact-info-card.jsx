export function ContactInfoCard({ icon, title, content, className = "" }) {
  return (
    <div
      className={`bg-[#9B1915] text-white p-3 rounded-lg flex items-center gap-4 ${className}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-red-100">{content}</p>
      </div>
    </div>
  );
}
