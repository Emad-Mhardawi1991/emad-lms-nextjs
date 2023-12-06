import { Skeleton } from '@/components/ui/skeleton'
import { UserButton, ClerkLoading , ClerkLoaded} from '@clerk/nextjs'

const UserMenu = () => {
  return (
    <div>
        <ClerkLoading>
            <Skeleton className='w-8 h-8 rounded-full'/>
        </ClerkLoading>
        <ClerkLoaded>
            <UserButton afterSignOutUrl='/'/>
        </ClerkLoaded>
    </div>
  )
}

export default UserMenu