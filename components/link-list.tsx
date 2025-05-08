import { EnvelopeIcon, FolderIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import FloralPattern from "./FloralPattern"

interface Link {
  title: string
  url: string
}

interface LinkListProps {
  links: Link[]
}

export default function LinkList({ links }: LinkListProps) {
  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase()

    if (lowerTitle.includes("instagram")) {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2.25c-2.72 0-5.25.71-7.34 1.93A9.97 9.97 0 0 0 2.25 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2.25 12 2.25Zm0 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm6.5-8.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
          />
        </svg>
      )
    } else if (lowerTitle.includes("linkedin")) {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.75 7.75a3 3 0 0 1 3-3h8.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3h-8.5a3 3 0 0 1-3-3v-8.5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.75 11v5M8.75 8v.01M12 16v-5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.25 16v-2.5a2.5 2.5 0 0 0-5 0" />
        </svg>
      )
    } else if (lowerTitle.includes("twitter") || lowerTitle.includes("x.com")) {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8 8 8 8M16 8l-8 8" />
        </svg>
      )
    } else if (lowerTitle.includes("topmate")) {
      return <GlobeAltIcon className="w-5 h-5" />
    } else if (lowerTitle.includes("project")) {
      return <FolderIcon className="w-5 h-5" />
    } else if (lowerTitle.includes("email")) {
      return <EnvelopeIcon className="w-5 h-5" />
    } else {
      return <GlobeAltIcon className="w-5 h-5" />
    }
  }

  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <div key={index} className="relative group">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 px-5 bg-primary text-primary-foreground rounded-md transition-colors duration-300 font-playfair uppercase tracking-wider text-sm sm:text-base relative z-10 hover:bg-accent hover:text-accent-foreground"
          >
            <span className="mr-2">{getIcon(link.title)}</span>
            {link.title}
          </a>
          <FloralPattern size={24} />
        </div>
      ))}
    </div>
  )
}
