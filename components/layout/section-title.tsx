interface SectionTitleProps {
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({ title, description, center = false }: SectionTitleProps) {
  return (
    <div className={center ? "text-center mb-6" : "mb-6"}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}