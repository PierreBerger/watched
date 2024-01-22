import { Link } from '@remix-run/react'

export function MainNav() {
	return (
		<nav className="flex items-center space-x-4 lg:space-x-6">
			<Link
				to="/movies"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Movies
			</Link>

			<Link
				to="/tv-shows"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				TV Shows
			</Link>

			<Link
				to="/people"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				People
			</Link>
		</nav>
	)
}
