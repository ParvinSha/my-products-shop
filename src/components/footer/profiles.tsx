import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Profiles = ({ initials }: { initials: string }) => {
  return (
    <Avatar>
      <AvatarFallback className="bg-red-500 border border-red-800 text-sm text-red-950">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}

export default Profiles
