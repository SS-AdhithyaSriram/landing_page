interface ProfileSectionProps {
  name: string
  bio: string
  profilePicture: string
}

export default function ProfileSection({ name, bio, profilePicture }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-accent">
        <img src={profilePicture || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
      </div>

      <h1 className="font-playfair text-2xl sm:text-3xl font-semibold text-card-foreground">{name}</h1>

      <p className="font-noto text-sm sm:text-base text-foreground max-w-md">{bio}</p>
    </div>
  )
}
