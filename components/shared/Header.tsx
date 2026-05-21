'use client';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        {icon && (
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 flex items-center gap-2">
            {icon}
          </p>
        )}
        <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-3 text-xl text-slate-600">{subtitle}</p>}
    </div>
  );
}
