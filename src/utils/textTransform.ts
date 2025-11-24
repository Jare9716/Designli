export function currencyFormat(currency: number) {
	const cuerrencyFormat = new Intl.NumberFormat("es-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return cuerrencyFormat.format(currency);
}

export function timeFormat(time: number) {
	const date = new Date(time);
	return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
}
