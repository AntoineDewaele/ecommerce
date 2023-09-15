import Navbar from './navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
        </>
    )
}