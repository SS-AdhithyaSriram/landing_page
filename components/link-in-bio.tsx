"use client"

import NamasteBanner from "@/components/namaste-banner"
import ProfileSection from "@/components/profile-section"
import LinkList from "@/components/link-list"
import DarkModeToggle from "@/components/dark-mode-toggle"

// Embed data directly in the component to avoid fetch issues
const bioData = {
  bannerText: "Namaste! I am Adhithya Sriram Suresh",
  profile: {
    name: "Adhithya Sriram Suresh",
    bio: "Hoping against hope, doing what we do",
    profilePicture: "/placeholder.svg?height=128&width=128",
  },
  links: [
    { title: "Instagram", url: "https://www.instagram.com/thisisadhithyasriram/" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/thisisadhithyasriram/" },
    { title: "Twitter", url: "https://x.com/Adhirocks05" },
    { title: "Topmate", url: "https://topmate.io/adhithyasriram_suresh" },
    { title: "Projects", url: "https://your-projects-placeholder.com" },
    { title: "Email - Adhirocks05", url: "mailto:adhirocks05@gmail.com" },
    { title: "Email - Contact Adhithya", url: "mailto:contact.adhithyasriram@gmail.com" },
    { title: "Email - Saladicious", url: "mailto:saladiciousblr@gmail.com" },
  ],
}

export default function LinkInBio() {
  // For MVP, we'll use the embedded data directly
  const data = bioData

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="absolute top-4 right-4">
          <DarkModeToggle />
        </div>

        <div className="space-y-10">
          <NamasteBanner text={data.bannerText} />
          <ProfileSection
            name={data.profile.name}
            bio={data.profile.bio}
            profilePicture={data.profile.profilePicture}
          />
          <LinkList links={data.links} />
        </div>
      </div>
    </div>
  )
}
