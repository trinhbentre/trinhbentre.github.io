import { tools } from './data/tools'
import { ToolCard } from './components/ToolCard'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-surface-700 bg-surface-800">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-text-primary">
            trinhbentre<span className="text-accent">.github.io</span>
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Browser-based developer tools — open source, no tracking, no backend
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 w-full flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </main>

      <footer className="border-t border-surface-700">
        <div className="max-w-5xl mx-auto px-6 py-6 text-text-muted text-xs text-center">
          Built with React + Vite + Tailwind CSS · Hosted on GitHub Pages
        </div>
      </footer>
    </div>
  )
}
