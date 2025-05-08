// This is a placeholder for a future data service
// For now, we're using embedded data directly in the component

export interface ProfileData {
  bannerText: string
  profile: {
    name: string
    bio: string
    profilePicture: string
  }
  links: {
    title: string
    url: string
  }[]
}

export async function getBioData(): Promise<ProfileData> {
  // In the future, this could fetch from an API or database
  return {
    bannerText: "Namaste! I am AdhithyaSriram Suresh",
    profile: {
      name: "AdhithyaSriram Suresh",
      bio: "Hoping against hope, doing what we do",
      profilePicture: "/placeholder.svg?height=128&width=128",
    },
    links: [
      { title: "Instagram", url: "https://www.instagram.com/thisisadhithyasriram/" },
      { title: "LinkedIn", url: "https://www.linkedin.com/in/thisisadhithyasriram/" },
      { title: "Twitter", url: "https://x.com/Adhirocks05" },
      { title: "Topmate", url: "https://topmate.io/adhithyasriram_suresh" },
      { title: "Projects", url: "https://your-projects-placeholder.com" },
      { title: "Email - Adhirocks05", url: "mailto:adhirocks05@gmall.com" },
      { title: "Email - Contact Adhithya", url: "mailto:contact.adhithyasriram@gmail.com" },
      { title: "Email - Saladicious", url: "mailto:saladiciousblr@gmail.com" },
    ],
  }
}
