interface LayoutProps{
    children: React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div className="h-full flex justify-center items-center">
        {children}
    </div>
  )
}

export default Layout