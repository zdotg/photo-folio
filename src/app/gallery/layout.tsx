import Nav from "../components/Nav"

export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">   
          <Nav />
          {children}
      </html>
    )
  }