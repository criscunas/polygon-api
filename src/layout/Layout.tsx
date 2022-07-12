import {PageHeader} from '../components/PageHeader'

type AppProps = {
  children ?: React.ReactNode
}; 

export const Layout = ({ children }: AppProps) => {
  return (
    <div className="bg-[#1b2021] h-screen px-4 sm:px-6 lg:px-10">
      <PageHeader/>
      <main> {children} </main>    
    </div>
  )
}


