import { Link } from '@remix-run/react'
import { type RemixLinkProps } from '@remix-run/react/dist/components'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'

interface MovieCardProps extends RemixLinkProps {
	image: string
	title: string
	releaseDate: string
	id: string
}

export function MovieCard({
	image,
	title,
	id,
	releaseDate,
	className,
	to,
}: MovieCardProps) {
	return (
		<Link to={to} className={className}>
			<Card className="w-[15rem] overflow-hidden hover:cursor-pointer">
				<CardContent className="px-0">
					<div className="overflow-hidden">
						<img
							src={image}
							alt="title"
							className="aspect-2/3 rounded-t-lg transition-all hover:scale-105"
						/>
					</div>
					<div className="px-2.5 pt-2.5">
						<CardTitle className="text-lg">{title}</CardTitle>
						<CardDescription>
							{format(new Date(releaseDate), 'dd LLL yyyy')}
						</CardDescription>
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}
