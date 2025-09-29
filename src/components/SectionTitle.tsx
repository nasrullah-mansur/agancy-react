
export default function SectionTitle({ span, h2, className }: { span: string; h2: string; className?: string; }) {
    return (
        <div className={`mt-8 mb-20 ${className}`}>
            <span className="text-primary dark:text-card text-2xl mb-3 block font-body">{span}</span>
            <h2 className="text-4xl font-semibold">{h2}</h2>
        </div>
    )
}
