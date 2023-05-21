import Link from 'next/link';
import { readdir } from 'node:fs/promises';
import { join, parse as parsePath } from 'node:path';
import type { NextPageProps } from '~/types/next';

export const dynamic = 'force-static';

export default async function Posts(_props: NextPageProps): Promise<JSX.Element> {
	const postFilePath = join(process.cwd(), 'src', 'data', 'notes');
	const allPostSlugs = await readdir(postFilePath).then((paths) =>
		paths.map((path) => parsePath(path).name),
	);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center space-y-2 py-12">
			<h1 className="text-3xl font-extrabold text-white">Notes</h1>
			<ol className="flex flex-col space-y-2">
				{allPostSlugs.map((slug) => (
					<li key={slug}>
						<Link href={`/notes/${slug}`}>{slug}</Link>
					</li>
				))}
			</ol>
		</main>
	);
}
