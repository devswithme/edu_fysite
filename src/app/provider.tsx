'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import Image from 'next/image'

import React, {
	createContext,
	ReactNode,
	useContext,
	useRef,
	useState,
} from 'react'

export const AppContext = createContext<
	| {
			isLogin: boolean
			setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
	  }
	| undefined
>(undefined)

// Custom hook to access the context
export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error(
			'useAppContext must be used within an AppProvider'
		)
	}
	return context
}

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [isLogin, setIsLogin] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const pwd = useRef(null)

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		if (
			// @ts-expect-error prop value is exist
			pwd?.current?.value === process.env.NEXT_PUBLIC_PWD
		) {
			setTimeout(() => {
				setIsLoading(false)
				setIsLogin(true)
			}, 1000)
		} else {
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
	}

	return (
		<AppContext.Provider value={{ isLogin, setIsLogin }}>
			{!isLogin ? (
				<Dialog open={true}>
					<DialogContent className='sm:max-w-[425px]'>
						<Image
							src='/logo.svg'
							alt='logo'
							width={90}
							height={90}
						/>
						<DialogHeader>
							<DialogTitle>Verification</DialogTitle>
							<DialogDescription>
								Enter the password to access the modules.
							</DialogDescription>
						</DialogHeader>

						<form onSubmit={handleLogin}>
							<Input
								placeholder='***'
								type='password'
								ref={pwd}
							/>
							<DialogFooter className='mt-4'>
								<Button
									type='submit'
									disabled={isLoading}>
									{isLoading ? (
										<>
											Verifying.. <Loader2 className='animate-spin' />
										</>
									) : (
										<>
											Login <ArrowUpRight />
										</>
									)}
								</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			) : (
				children
			)}
		</AppContext.Provider>
	)
}

export default AppProvider
