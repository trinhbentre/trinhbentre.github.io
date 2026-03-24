import type { Tool } from '../data/tools'

export function ToolCard({ tool }: { tool: Tool }) {
  const url = `https://trinhbentre.github.io/${tool.slug}/`
  return (
    <a
      href={url}
      className="card group flex flex-col gap-3 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200 no-underline"
    >
      <div className="flex items-center gap-3">
        <span className="text-xl w-10 h-10 flex items-center justify-center bg-surface-700 rounded-md text-accent font-mono shrink-0">
          {tool.icon}
        </span>
        <h2 className="text-text-primary font-semibold group-hover:text-accent transition-colors text-sm">
          {tool.name}
        </h2>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">
        {tool.description}
      </p>
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {tool.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-surface-700 text-text-muted border border-surface-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
