import { NextResponse } from "next/server";

export const GET = async () => {
	const res = await fetch("https://example.com", {
		headers: {
			"Content-Type": "application/json",
			"API-Key": "",
		}
	});

	const data = await res.json();

	return NextResponse.json({ data });
};
