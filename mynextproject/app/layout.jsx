export const metadata = {
    title: "Home Page",
    description: "This is the home page",
}

export default function RootLayour({children}){
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
