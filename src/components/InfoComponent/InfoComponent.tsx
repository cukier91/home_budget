import React from 'react';

export default function InfoComponent({ info }: { info: string | boolean }) {
	if (info === false) {
		return null;
	} else {
		return (
			<div
				className={`flex p-4 text-${info}-700 border rounded border-${info}-900/10 bg-${info}-50 justify-center`}
				role="alert"
			>
				<strong className="text-sm font-medium">
					{' '}
					{info === 'green'
						? 'Przesłano !'
						: 'Wprowadzone dane są nieprawidłowe'}
				</strong>
			</div>
		);
	}
}
