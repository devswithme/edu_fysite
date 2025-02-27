import './globals.css'
import { Inter } from 'next/font/google'
import {
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import AppProvider from './provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	icons: {
		icon: '/fav.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<AppProvider>
					<SidebarProvider>
						<AppSidebar />
						<Toaster />
						<SidebarTrigger className='absolute top-6 left-6' />
						<main className='flex-1 overflow-auto px-8 py-24'>
							{children}
						</main>
					</SidebarProvider>
				</AppProvider>
			</body>
		</html>
	)
}
